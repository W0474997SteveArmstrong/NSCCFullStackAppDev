const fs = require('fs');
//read data into array of arrays
//this will represent the battleGrid
const gridText = fs.readFileSync('map.txt','utf-8');
//break the text into lines/rows and store them in an array.
const gridRows = gridText.split('\r\n');

console.log()