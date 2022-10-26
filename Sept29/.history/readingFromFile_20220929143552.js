/*Here fs stands for filesystem.
This dependency helps us to read stuff from a file we specify. */

const fs = require('fs');

/* Just like we used readline-sync to read user input, we are using readfile-sync,
to read from file. */

//fs.readFileSync("nameOfFile",encodingFormat);

const fileContents = fs.readFileSync('quadraticInputs.csv','utf-8');

console.log(fileContents); //1,4,5

/*Now we need to convert string to stringArray
*/

const fileContentsArr = fileContents.split(",");

console.log(fileContentsArr);





