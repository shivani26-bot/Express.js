//require function is used to import or load modules (libraries or files) into your program.
const fs = require("node:fs");
// writeFile,appendFile,copyFile,rename,unlink, readFile, read
// fs.writeFile("hey.txt", "Welcome to the Nodejs course.", function (err) {
//   console.error(err);
//   console.log("done");
// });
// // writeFile- it will create a file with the provided text

// fs.appendFile(
//   "hey.txt",
//   " Enjoy the course and give your valuable feedback!",
//   function (err) {
//     console.error(err);
//     console.log("done");
//   }
// );
// //   appendFile- it will append in already created file with the provided text

// fs.rename("hey.txt", "hello.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// rename- it will rename the already existing path with the new name

// fs.copyFile("hello.txt", "./copy/copiedFile.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("done");
// });

// //if we don't create the folder copy2 and try to copy it will give error

// fs.copyFile("hello.txt", "./copy2/copiedFile.txt", function (err) {
//   if (err) console.error(err.message);
//   else console.log("done");
// });

// // copyFile- it will create a new file which is copy of hello.txt file
// fs.unlink("hello.txt", function (err) {
//   if (err) console.error(err);
//   else console.log("removed");
// });

// unlink- removes the file

// fs.rmdir("./copy", function (err) {
//   if (err) console.error(err); //directory not empty
//   else console.log("removed");
// });

// fs.rmdir("./copy", { recursive: true }, function (err) {
//   if (err) console.error(err); //it will remove the file
//   else console.log("removed");
// });
//rmdir- to remove the blank folders,  in order to delete folders which consists nested files, {recursive:true}
// fs.rm("./copy", { recursive: true }, function (err) {
//   if (err) console.error(err); //it will remove the file
//   else console.log("removed");
// });
//fs.rm- future version

fs.readFile("./example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

// This function is used to open a file. It can create the file if it doesn't already exist.
// It takes three arguments:
// The file path ("newFile.txt"): This is the name of the file you want to open or create.
// If the file doesn't exist, it will be created in the current working directory.
// The mode ("w"): This specifies the operation to perform. "w" stands for "write" mode, which means it will open the file for writing.
// If the file already exists, it will be truncated (i.e., its contents will be deleted); if it doesn't exist, a new empty
// file will be created.
// err: An error object (if there’s an error opening or creating the file, it will be passed here).
// file: A file descriptor representing the opened file.

// fs.open("newFile.txt", "w", (err, file) => {
//   if (err) throw err;
//   console.log("File created!");
// });

// fs.open("/Users/shivani_kumari/Desktop/example.txt", "w", (err, file) => {
//   if (err) throw err;
//   console.log("File created!");
// });

//create a directory
// fs.mkdir("new-folder", (err) => {
//   if (err) throw err;
//   console.log("directory created!");
// });

//remove directory
// fs.rmdir("new-folder", (err) => {
//   if (err) throw err;
//   console.log("Directory deleted!");
// });

//reading directory contents
fs.readdir(".", (err, files) => {
  if (err) throw err;
  console.log("Files in directory:", files); // gives the file in the current directory
});

// use file streams for large files
// when working with large files, reading the whole file at once can be inefficient. Use streams to handle daa in chunks

// writing large files with streams
// const writeStream = fs.createWriteStream("output.txt");
// writeStream.write("Writing to a file using streams.");
// writeStream.end();

//reading large files with streams
const readStream = fs.createReadStream("./output.txt", "utf8");
readStream.on("data", (chunk) => {
  console.log("chunk received:", chunk); //chunk received: Writing to a file using streams.
});

console.log("hello world");
//node script.js
//we can run it only through node, as node only gives the environment to run this code
