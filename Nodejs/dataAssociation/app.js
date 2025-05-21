const express = require("express");
const app = express();

const userModel = require("./models/user");

const postModel = require("./models/post");
app.get("/", function (req, res) {
  res.send("hey");
});

app.get("/create", async function (req, res) {
  //when we use any model, we have to use async await
  let user = await userModel.create({
    username: "shivani",
    age: 25,
    email: "shivani@gmail.com",
  });
  res.send(user);
});

app.get("/post/create", async function (req, res) {
  let post = await postModel.create({
    postData: "This is my first post",
    user: "67ee886aeb5d81114ae28fa6",
  });
  //we made the post by the user, the above tell which user has posted the post
  // now also inform the user about the post made
  let user = await userModel.findOne({ _id: "67ee886aeb5d81114ae28fa6" });
  user.posts.push(post._id);

  // save when u make changes without using database method update, delete, or find,
  // here we are making changes using push in posts array , save this
  await user.save();
  res.send({ post, user });
});
app.listen(3000);
