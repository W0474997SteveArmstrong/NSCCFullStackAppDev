const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX ="\r\n";
const fileContentArr = fileContentStr.split(REGEX);
let innerArrOfFileContentArr = [];

for(let row of fileContentArr)

console.log(fileContentArr);
console.log(innerArrOfFileContentArr);