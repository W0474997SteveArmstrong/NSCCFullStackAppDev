const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX ="\r\n";
const fileContentArr = fileContentStr.split(REGEX);
let innerArrOfFileContentArr = [];

for(let row of fileContentArr){
    //Each row of the original array is split into a new Array.
    innerArrOfFileContentArr.push(row.split(","));
}

console.log(fileContentArr);
console.log(innerArrOfFileContentArr);