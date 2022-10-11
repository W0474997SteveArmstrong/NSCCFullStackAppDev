// This Assignment2 question1 tests the knowledge of readfilesync

//Here fs means file synchronus
const fs = require('fs');
//The path used to fetch the file location is the relative path.
//utf-8 is the encoding format used to prevent reading gibberish content.
const fileContents = fs.readFileSync("files/fileUsedForReading.txt",'utf-8');
//converts String to array
const fileContentsArr = fileContents.split(" ");
//Modifies contents in the Array
console.log(fileContentsArr);