const fs = require('fs');
//read data into array of arrays
const gridText = fs.readFileSync('map.txt','utf-8');
const gridRows = gridText.split('\r\n');
console.log()