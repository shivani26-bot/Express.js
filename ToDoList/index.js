const express = require("express");

const app = express();
const { PORT, DB_URL } = require("./config/serverConfig");
//process is global variable that node has
app.listen(process.env.PORT, () => {
  console.log(`server started at port ${PORT}`);
});
