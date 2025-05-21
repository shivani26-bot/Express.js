//server
const express = require("express");
const app = express();

//middleware
// if i request for any rout for ex: /, /profile, from server request goes to middleware
// with below code we will be seeing the loading indicator on the tab continuously
// because middleware here is not forwarding the request , hence we should use next() once the request comes here and some task is performed here
// app.use(function (req, res, next) {
//   console.log("middleware running");

// });
app.use(function (req, res, next) {
  console.log("middleware running");
  next(); //forward the request
});
app.use(function (req, res, next) {
  console.log("middleware runs again");
  next();
});
// route
//we can create routes- we can control what to show on different path
// middleware - function(req,res){}
app.get("/", function (req, res) {
  res.send("we are at / route, and callback function is middleware");
});

app.get("/profile", function (req, res) {
  res.send("we are at /profile route and callback function is middleware");
});

app.get("/about", function (req, res, next) {
  return next(new Error("something went wrong")); //this comes on console
});
//error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke!"); //displays on frontend when we access /about
});
app.listen(3000);

// set up basic express application
// routing
// middleware
// request and response handling
// error handling

// in order to perform any task before running the route
// jab bhi server request accept krta hai wha se route k
// beech pahunchne tk, agr app us request ko beech mei
//  rokte ho and kuchh perform krte ho toh ye element
//  middleware kehlata hai

// server ---  middleware ---route
// when ever we go to some route, middleware will run first then we go to the route
