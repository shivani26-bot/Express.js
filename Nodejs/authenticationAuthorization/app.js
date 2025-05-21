// const cookieParser = require("cookie-parser");
// const express = require("express");
// const app = express();
// app.use(cookieParser());
// app.get("/", function (req, res) {
//   res.cookie("name", "shivani"); //to set the cookie we use response
//   res.send("welcome");
// });

// app.get("/read", function (req, res) {
//   //to read the cookies we use request
//   console.log(req.cookies); //{ name: 'shivani' }, to print this do write the line app.use(cookieParser()); other wise the output will be undefined
//   res.send("read page");
//   //even though we are not sending cookie in response here but we will find the cookie in the browser for this route also
// });
// app.listen(3000);

// // when we go to any route from browser, cookie will be there by default even if we dont send from the backend for other route
// // authorization header - we have to send this separately in request and cookie - it goes by default , there is mechanism for that

//bcrypt
// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");

// app.get("/", function (req, res) {
//   //encrypting any password
//   //   saltRounds: 10;
// bcrypt.genSalt(10, function (err, salt) {
//   console.log("salt", salt); //random string $2b$10$Pyokd6X.TZ2V8o/XUWkIv.
//   // myPlaintextPassword:pololololoo
//   bcrypt.hash("pololololoo", salt, function (err, hash) {
//     // Store hash in your password DB.
//     //   password will be converted into hash ie a long string
//     console.log("hash", hash);
//   });
// });

//   //   decrypting password
//   //   hash: $2b$10$499finP0SFdTW.VWxyB7UeQfX4ZuEvtUNHPcRo80CH3Gc3lm8pS.C
//   bcrypt.compare(
//     "pololololoo",
//     "$2b$10$499finP0SFdTW.VWxyB7UeQfX4ZuEvtUNHPcRo80CH3Gc3lm8pS.C",
//     function (err, result) {
//       // result == true
//       console.log(result); //returns true or false
//     }
//   );

//   res.send("welcome");
// });

// app.listen(3000);
// https://www.npmjs.com/package/bcrypt

// jwt
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(cookieParser());
app.get("/", function (req, res) {
  // res.send("welcome");//cannot send multiple responses to the client within the same request, only one res.send() should be there within same request
  // we dont't keep secret in plain text
  // if we have the secret we can decrypt any data
  //based on the secret the data ie { email: "shivanihgf@gmail.com" } will be encrypted
  // when we decrypt the token , the second part of the token is payload in which we get the email data
  const token = jwt.sign({ email: "shivanihgf@gmail.com" }, "secret"); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoaXZhbmloZ2ZAZ21haWmloZ2ZAZ21haWwuY29tIiwiaWF0IjoxNzQyOTczMTg4fQ.8SaWd1f0Rujke_pSlMhshk90g4ylDntoTFzBRMe_pSlMhshk90g8sUM4
  console.log(token);
  // this token is sent to the browser
  // httpOnly: true option ensures that the cookie cannot be accessed through JavaScript (e.g., document.cookie), improving security. The secure: false option allows the cookie to be sent over HTTP (you may want to set it to true if you're using HTTPS).

  res.cookie("token", token);
  res.send("done");
});

app.get("/read", function (req, res) {
  console.log(req.cookies.token);
  //token from the browser is decryptedand verified
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data); //{ email: 'shivanihgf@gmail.com', iat: 1742974477 }
});
app.listen(3000);
