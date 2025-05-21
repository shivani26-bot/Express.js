const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://shivani:dbpassword@tasksapi.4f1zq.mongodb.net/testingthedatabase"
);
const userSchema = mongoose.Schema({
  //we can also write like
  // username:{
  //   type:String
  // }
  username: String,
  email: String,
  age: Number,
  // posts: Array, //a user can have multiple posts
  // [id1, id2 ,id3] post will be in this format where each element represent the ids of the post, this is referencing
  //post is array of ids
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId, //type is object id
      // also mention that ids belong to which model
      ref: "post", //id belongs to post model
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
