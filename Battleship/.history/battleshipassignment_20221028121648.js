const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX ="\r\n";
const fileContentArr = fileContentStr.split(REGEX);
let innerArrOfFileContentArr = [];

for(let row of fileContentArr){
    //Rubric Item
    //On application start, your code will read the contents of the provided ship 
    //grid text file into a two-dimensional
   //array in your program.
    //Each row of the original array is split into a new Array.
    innerArrOfFileContentArr.push(row.split(","));
}

console.log(fileContentArr);
console.log(innerArrOfFileContentArr);