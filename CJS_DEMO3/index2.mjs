// const { linearSearch: ls, binarySearch: bs } = require("./searching");

// //gives error : require is not defined in ES module scope
// console.log(ls([3, 2, 1, 5, 4, 23, 6], 23));

//current file is index2.mjs then other files we import should have .js extension
import searchingAlgo from "./searching.js";
console.log(searchingAlgo.linearSearch([3, 2, 1, 5, 4, 23, 6], 23));

// import sortingAlgo from "./sorting.mjs"; //will not work, throws error, hence destructure
// named export should always be referred as a destructure way when we are importing them
// export function_name() {}
// import { bubbleSort, selectionSort, insertionSort } from "./sorting.mjs"; //this will not give error
import * as sorting from "./sorting.mjs"; //for all the named exports
const arr1 = [5, 4, 3, 2, 1];
sorting.insertionSort(arr1); //can't access merge sort here as merge sort is export default
console.log(arr1);
//export default function function_name(){}
import mergeSort from "./sorting.mjs"; //no error

let arr = [5, 4, 3, 2, 1];
arr = mergeSort(arr);
console.log(arr);

// If you have a module that provides both a default export and named exports, the first import is always the default export. After that, you can specify named exports as needed.
// For example, in ES modules, your import statement might look like this:
// import defaultExport, { namedExport1, namedExport2 } from './module';
// Here, defaultExport is the default export from the module, while namedExport1 and namedExport2 are the named exports. This structure ensures that the default export is handled first, followed by any additional named exports.
