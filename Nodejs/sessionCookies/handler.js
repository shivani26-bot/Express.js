const uuid = require("uuid");
const users = {
  user1: "password1",
  user2: "password2",
};
// each session contains the username of the user and the time at which it expires
class Session {
  constructor(username, expiresAt) {
    this.username = username;
    this.expiresAt = expiresAt;
  }
  isExpired() {
    this.expiresAt < new Date();
  }
}
//this object stores the users sessions. For larger scale applications, you can use a database or cache for this purpose
const sessions = {};

const signinHandler = (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    res.status(401).end(); //unauthorized code
    return;
  }
  const expectedPassword = users[username];
  if (!expectedPassword || expectedPassword !== password) {
    res.status(401).end();
    return;
  }
  //generate random uuid as the session token
  const sessionToken = uuid.v4();
  console.log(sessionToken);
  //set the expiry time as 120s after the current time
  const now = new Date(); //current date and time, date object
  //   Mon Mar 24 2025 11:54:41 GMT+0530 (India Standard Time)
  const expiresAt = new Date(+now + 120 * 1000); //120 * 1000, which equals 120,000 milliseconds.
  //   120,000 milliseconds is equivalent to 120 seconds, or 2 minutes.
  //   console.log(+now)  //1742797481291
  //+ (unary plus) is used to convert the Date object to its corresponding numeric timestamp.
  //   Date object in JavaScript can be coerced into a number, which represents the number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch). This number is often referred to as the timestamp.

  //create a session containing information about the user and expiry time
  const session = new Session(username, expiresAt);
  //add the session information to the sessions map
  sessions[sessionToken] = session;

  res.cookie("session_token", sessionToken, { expires: expiresAt });
  res.end(); //to end the response and send it back to the client
};

const welcomeHandler = (req, res) => {
  //if request doesn't have any cookies, that means it isn't authenticated. Return an error code

  if (!req.cookies) {
    res.status(401).end();
    return;
  }
  // we can obtain session token from the requests cookies, which comes with every request
  const sessionToken = req.cookies["session_token"];
  if (!sessionToken) {
    res.status(401).end();
    return;
  }
  //If the sessionToken exists in the map, the value will be the Session instance associated with that token.
  userSession = sessions[sessionToken]; //it is instance of session class only
  if (!userSession) {
    //if session token is not present in session map, return unauthorized
    res.status(401).end();
    return;
  }
  if (userSession.isExpired()) {
    delete sessions[sessionToken];
    res.status(401).end();
    return;
  }
  res.send(`Welcome ${userSession.username}!`).end();
};

// Since the expiry time of a session token is kept small, we need to issue a new token often to keep the user logged in.
// Of course, we cannot expect the user to login every time their token expires. To solve this, we can create another route that accepts the users current session token, and issues a new session token with a renewed expiry time.

const refreshHandler = (req, res) => {
  if (!req.cookies) {
    res.status(401).end();
    return;
  }
  const sessionToken = req.cookies["session_token"];
  if (!sessionToken) {
    res.status(401).end();
    return;
  }
  userSession = sessions[sessionToken];
  if (!userSession) {
    res.status(401).end();
    return;
  }
  if (userSession.isExpired()) {
    delete sessions[sessionToken];
    res.status(401).end();
    return;
  }
  //   create a new session token
  const newSessionToken = uuid.v4();
  //    renew the expiry time
  const now = new Date();
  const expiresAt = new Date(+now + 120 * 1000);
  const session = new Session(userSession.username, expiresAt);
  //add new session to out map and delete the old session
  sessions[newSessionToken] = session;
  delete sessions[sessionToken];
  //   set a cookie in the response.
  //   name of the cookie (the first parameter).
  // The value of the cookie (the second parameter).
  // options object (the third parameter), where you can configure additional settings for the cookie (like its expiration date, path, etc.).
  //   res.cookie(name, value, [options]);

  res.cookie("session_token", newSessionToken, { expires: expiresAt });
  res.end();
};

const logoutHandler = (req, res) => {
  if (!req.cookies) {
    res.status(401).end();
    return;
  }
  const sessionToken = req.cookies["session_token"];
  if (!sessionToken) {
    res.status(401).end();
    return;
  }
  delete sessions[sessionToken];

  res.cookie("session_token", "", { expires: new Date() });
  res.end();
};

module.exports = {
  signinHandler,
  welcomeHandler,
  refreshHandler,
  logoutHandler,
};
