const mongoose = require("mongoose");
//connects your application to a mongodb database using mongoose
// establish a connection to MongoDB.
// URL inside the backticks is a MongoDB connection string for connecting to a MongoDB Atlas cluster (a cloud-hosted MongoDB service).

mongoose.connect(
  `mongodb+srv://shivani:dbpassword@tasksapi.4f1zq.mongodb.net/mongoPractice`
);
// Mongoose schema called userSchema. A schema defines the structure of the documents in the MongoDB collection. It acts as a blueprint for the data, specifying the fields and their data types.

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});
// export the Mongoose model.
// creates a model based on the userSchema. A Mongoose model is a wrapper for the schema and is used to interact with the database (e.g., creating, reading, updating, deleting documents).

// "user" is the name of the collection in the MongoDB database. MongoDB will automatically pluralize this name to users, which will be the actual collection name where the documents are stored.
// userSchema is the schema you've defined, which dictates the structure of the documents in the users collection.
module.exports = mongoose.model("user", userSchema);

// By exporting the model using module.exports, you allow this model to be used in other parts of the application. For example, in a controller or route handler, you can require and use the model to interact with the database.
// The model gives you access to built-in methods like find(), create(), update(), and delete(), among others.
