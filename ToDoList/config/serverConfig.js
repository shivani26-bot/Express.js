const dotenv = require("dotenv");
dotenv.config();

const envVariables = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};

module.exports = envVariables;
