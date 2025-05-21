const mongoose = require("mongoose");

//no need of connection here, that's why we write connection in config.js file
const postSchema = mongoose.Schema({
  postData: String,
  user: {
    //id, which tells that the post is posted by which user
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", postSchema);
