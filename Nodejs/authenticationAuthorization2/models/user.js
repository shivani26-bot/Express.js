const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://shivani:dbpassword@tasksapi.4f1zq.mongodb.net/authtestapp`
);
const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
});

module.exports = mongoose.model("user", userSchema);
