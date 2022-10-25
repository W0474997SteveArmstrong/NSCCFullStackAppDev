const fs = require('fs');
//read data into array of arrays
//this will represent the battleGrid
const gridText = fs.readFileSync('map.txt','utf-8');
//break the text into lines/rows and store them in an array.
const gridRows = gridText.split('\r\n');
console.log(gridText);
console.log(gridRows);
//divide each row into columns and store those columns as an array
//within the larger array.We need to split each row on the ',' seperator.

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}