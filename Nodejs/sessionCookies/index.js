const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const {
  signinHandler,
  welcomeHandler,
  refreshHandler,
  logoutHandler,
} = require("./handler");

const app = express();

//middleware
// app.use(bodyParser.json());
// we can also use, in place of bodyParser.json
app.use(express.json()); //enables to read json data
app.use(express.urlencoded({ extended: true })); //enables to read x-www-form-urlencoded data
app.use(cookieParser());

//routes
app.post("/signin", signinHandler);
app.get("/welcome", welcomeHandler);
app.post("/refresh", refreshHandler);
app.get("/logout", logoutHandler);
app.post("/welcome");

app.listen(8080, () => {
  console.log("server running on port 8080");
});

// https://www.sohamkamani.com/nodejs/session-cookie-authentication/
// https://medium.com/@patilchetan2110/understanding-sessions-and-cookies-in-node-js-894831d1da7c
// https://dev.to/saint_vandora/how-to-implement-session-management-in-nodejs-applications-5emm
// https://dev.to/edemagbenyo/nodejs-authentication-with-cookies-and-session-part-2-2752
