const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX ="\r\n";
const fileContentArr = fileContentStr.split(REGEX);
let innerArrOfFileContentArr = [];
innerArrOfFileContentArr=innerArrOfFileContentArr.push()

console.log(fileContentArr);
console.log(innerArrOfFileContentArr);