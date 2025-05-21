const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  //   res.send("welcome");
  res.render("index");
});

app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      console.log(hash);
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });
      //   shkjsdfhaskdfh is secret
      let token = jwt.sign({ email }, "shkjsdfhaskdfh");
      res.cookie("token", token);
      res.send(createdUser);
    });
  });

  //this will store the password in plain text in database, hence use bcrypt before creating this
  //   let createdUser = await userModel.create({
  //     username,
  //     email,
  //     password,
  //     age,
  //   });
  //   res.send(createdUser);
});

app.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
});

app.get("/login", function (req, res) {
  res.render("login");
});
app.post("/login", async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email }); //if user with the requested email is not present, this will return null
  if (!user) return res.send("something is wrong");
  console.log(user.password, req.body.password);
  // req.body.password-> this is  password in plain text with which login request is made
  // user.password -> this is password stored in hash format in database
  bcrypt.compare(req.body.password, user.password, function (req, result) {
    console.log(result);
    if (result) {
      // create token, send it to the user browser once after login
      let token = jwt.sign({ email: user.email }, "shkjsdfhaskdfh");
      res.cookie("token", token);
      // token will be stored if even if we refresh or go back on the website
      // once we logout token will be deleted
      res.send("yes you can login");
    } else res.send("you can't login, invalid credential");
  });
});
app.listen(3000);

// create user account
//     mongoose
//     schema
//     model
//     usercreate ->password->hash
//     jwt token->cookie

// login->token->decrypt->email
