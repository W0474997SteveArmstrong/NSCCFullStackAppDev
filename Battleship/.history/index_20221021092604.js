const fs = require('fs');
//read data into array of arrays
//this will represent the battleGrid
const gridText = fs.readFileSync('map.txt','utf-8');
//break the text into lines/rows and store them in an array.
const gridRows = gridText.split('\r\n');
// console.log("GridText is:",gridText);
// console.log("GridRows is:",gridRows);
//divide each row into columns and store those columns as an array
//within the larger array.We need to split each row on the ',' seperator.
const battleGrid = [];
for (const row of gridRows) {
     battleGrid.push(row.split(','));
}
console.table(battleGrid);

//Now we want to repeatedly ask the user for coordinates to fire at:
//we're going to ask for an additional shot until one of two things happen:
//either they run out of ammo (LOST)