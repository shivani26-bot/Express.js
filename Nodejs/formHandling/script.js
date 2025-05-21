// This section is all about ejs and dynamic routing

const express = require("express");
const path = require("path");
const app = express();

app.use(express.json()); //enables to read json data
app.use(express.urlencoded({ extended: true })); //enables to read x-www-form-urlencoded data
// when we send data from frontend to backend backend doesn't recieve the data as plain text, but it receive it as urlencoded, hence to convert the blob back to readable format we use above two lines of code
app.use(express.static(path.join(__dirname, "public"))); //we can use, images videos,stylesheets , javascript
// dirname will give the current directory path
//for every request static files will be found in public folder
app.set("view engine", "ejs"); //we can render ejs pages
// Set EJS as the template engine,It will use EJS rules while creating HTML.

app.set("views", path.join(__dirname, "views")); //Hey express, look all of my template files(.ejs) at this path
app.get("/", function (req, res) {
  // res.send("welcome to form handling");
  //we can perform dynamic operations with ejs like 2+2=4
  // render will render the given page if it's present under views folder
  // we can also send data to the ejs template
  res.render("index"); //page will be searched in views folder
});

// dynamic routing
app.get("/profile/:username", function (req, res) {
  console.log(req.params.username);
  res.send(`${req.params.username} profile`);
});
app.get("/profile/:username/:age", function (req, res) {
  console.log(req.params.username);
  console.log(req.params.age);
  res.send(
    `${req.params.username} profile, ${req.params.username}  age is ${req.params.age} `
  );
});

app.listen(3000, function () {
  console.log("its running");
});

// console.log(__dirname); //C:\Users\shivani_kumari\Desktop\Nodejs\formHandling
// console.log(__dirname + "/public"); //C:\Users\shivani_kumari\Desktop\Nodejs\formHandling/public

// dynamic routing
//      dynamic routing
//             hum log kai baar kuch routes dekhte hai unme sirf ekk hi hissa change hota hai
//             author/harsh, /author/harshita,/author/rashmika
//             we will not create these many routes for as some parts are same in about routes
//             sabse pehle browser par jao, url likhiye jo apko chahiye and enter , ab us url rout ko create kariye, response bhejiye kuch bhi
//             ab ussi url ko agr dynamic banana hai toh realise kro kaun sa part dynamic hai aur uss part ke aage route mei : lga do
//      how to get data coming from frontend at backend express.Router

//      setting up parsers for from
//      setting up ejs for ejs pages
//               install ejs from npm
//               setup ejs as a view engine

//      setting up public static files
