//fs means file synchronous
// const fs = require('fs');
// const fileContents = fs.readFileSync('')


const fs =require('fs');
const fileContents = fs.readFileSync("anotherfileIcreated.txt",'utf-8');
console.log(fileContents);