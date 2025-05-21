// CRUD Operations with EJS & Server-Side Rendering
const express = require("express");
const app = express();
const path = require("path");
const userModel = require("./models/userInfo");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //   res.send("hey user");
  res.render("index");
});

app.get("/read", async (req, res) => {
  let allUsers = await userModel.find();
  res.render("read", { users: allUsers });
});

app.get("/delete/:id", async (req, res) => {
  let users = await userModel.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

app.post("/create", async (req, res) => {
  let { name, email, imageUrl } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image: imageUrl,
  });
  // res.send(createdUser);
  //as soon s it's created we are redirected to read page
  res.redirect("/read");
});

app.get("/edit/:userid", async (req, res) => {
  let user = await userModel.findOne({ _id: req.params.userid });
  console.log("user", user);
  res.render("edit", { user });
});

app.post("/update/:userid", async (req, res) => {
  let { name, email, imageUrl } = req.body;
  let user = await userModel.findOneAndUpdate(
    { _id: req.params.userid },
    { name, email, imageUrl },
    { new: true } //it will give the updated user
  );
  console.log("updated user", user);
  res.redirect("/read");
});
app.listen(3000);
