// This Assignment2 question1 tests the knowledge of readfilesync

//Here fs means file synchronus
const fs = require('fs');
//The path used to fetch the file 
const fileContents = fs.readFileSync("files/fileUsedForReading.txt")