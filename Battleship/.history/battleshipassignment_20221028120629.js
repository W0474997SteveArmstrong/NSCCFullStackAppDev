const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX =/r\n;
const fileContentArr = fileContentStr.split(",");
console.log(fileContentArr);