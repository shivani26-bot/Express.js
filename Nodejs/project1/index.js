//this section is about practicing ejs and dynamic routes
//notes taking web app
const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
  //reads directory if files folder doesn't have any files inside it, it will return [] empty array
  fs.readdir(`./files`, function (err, files) {
    console.log(files);
    //we are sending files data to index.ejs file
    res.render("index", { files: files });
  });
  //   res.send("welcome");
});

app.post("/create", function (req, res) {
  console.log(req.body); // { title: 'hey', details: 'gkjgkjgblkjbi' }, this data comes from frontend
  //create a file
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.details,
    function (err) {
      res.redirect("/"); // once the file is created, it will redirect to / route
    }
  );
});

app.get("/files/:filename", function (req, res) {
  //data will come in following format when we try to read file <Buffer 42 75 67 20 66 69 78 65 64 2c 20 6e 65 77 20 76 65 72 73 69 6f 6e 20
  // 69 73 20 61 76 61 69 6c 61 62 6c 65>
  // if we want it to be in english then use utf-8: Bug fixed, new version is available
  //   buffer data will pass through utf-8 which converts into the english character
  fs.readFile(
    `./files/${req.params.filename}`,
    "utf-8",
    function (err, filedata) {
      console.log(filedata);
      res.render("show", {
        filename: req.params.filename,
        filedata: filedata,
      }); //i will render this on show page
    }
  );
});

app.get("/edit/:filename", function (req, res) {
  res.render("edit", { filename: req.params.filename });
});
app.post("/edit", function (req, res) {
  //we get previous and new name
  console.log(req.body);
  //{ previous: 'appfeature.txt', new: 'new.txt' }
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new}`,
    function (err) {
      res.redirect("/");
    }
  );
});
app.listen(3000);
