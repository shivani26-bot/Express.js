const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://shivani:dbpassword@tasksapi.4f1zq.mongodb.net/mongoPractice`
);
const userSchema = mongoose.Schema({
  image: String,
  email: String,
  name: String,
});

module.exports = mongoose.model("userInfo", userSchema);
