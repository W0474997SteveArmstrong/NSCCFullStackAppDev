const fs = require('fs');

const gridText = fs.readFileSync('map.txt','utf-8');
const gridLines = gridText.split('\r\n');
console.log()