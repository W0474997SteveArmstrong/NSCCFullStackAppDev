const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const fileContentArr = fileContentStr.split(",")