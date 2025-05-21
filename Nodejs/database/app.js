const express = require("express");
const app = express();

const userModel = require("./usermodel"); //we can perform crud based on this model
app.get("/", (req, res) => {
  res.send("hey");
});

//mongodb code is always asynchronous
app.get("/create", async (req, res) => {
  //async code
  let createdUser = await userModel.create({
    name: "shivani",
    email: "shivanihgf79@gmail.com",
    username: "shivani_bot",
  });
  res.send(createdUser);
  console.log("hey");
});

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "shivani_bot" }, //searching based on username
    { name: "shivani kumari" }, //the field to update, update name to shivani kumari
    { new: true }
  );
  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
  //always return an array
  let users = await userModel.find();
  // let users = await userModel.find({ username: "shivani" });
  res.send(users);
});

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "shivani_bot" });
  res.send(users);
});
app.listen(3000);
