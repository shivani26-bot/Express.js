const dotenv = require("dotenv");
dotenv.config();
//tries to access the root directory of your project. Inside that root directory, it looks for a .env file. Once it finds the .env file, it parses it and loads all the environment variables defined in it.
const envVariables = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};

module.exports = envVariables;
