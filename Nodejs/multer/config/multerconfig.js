// using multer hm files ko upload kr skte hai, agr do files with same name upload hue hai toh ekk hi file rhega qki recent file existing file ko override kr dega, agr hm dono files rkhna chahte hai toh hme hrr file jo upload ki gyi h uska ekk unique name generate krna hoga , uske liye hm crypto ka use kr skte hai
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

//diskStorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/images/uploads");
  },
  filename: function (req, file, cb) {
    //creating a random name of 12 length for uploaded file
    crypto.randomBytes(12, function (err, name) {
      // name is a buffer hence covert to hexadecimal
      //   generate a random name and concat the extension of original file uploaded
      const fn = name.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
