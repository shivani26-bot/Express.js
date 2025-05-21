// all the modules exposed from searching.js file will be required
// const searchFunctions = require("./searching");
// console.log(searchFunctions); //{ linearSearch: [Function: search], binarySearch: [Function: search] }
// console.log(searchFunctions.linearSearch([3, 2, 1, 5, 4, 23, 6], 23));

// we can also destructure
// const { linearSearch, binarySearch } = require("./searching");//named export
// //after destructuring use like this
// console.log(linearSearch([3, 2, 1, 5, 4, 23, 6], 23));

//we can also give alias to the functions imported
const { linearSearch: ls, binarySearch: bs } = require("./searching");
console.log(ls([3, 2, 1, 5, 4, 23, 6], 23));

// const LinearSearch = require("./searching"); //default export
//here LinearSearch is a function
// console.log(LinearSearch([32, 4, 5, 6, 7, 23], 6));
// console.log(module); //module is global
