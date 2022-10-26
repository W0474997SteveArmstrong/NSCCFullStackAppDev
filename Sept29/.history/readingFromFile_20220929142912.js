/*Here fs stands for filesystem.
This dependency helps us to read stuff from a file we specify. */

const fs = require('fs');

/* Just like we used readline-sync to read user input, we are using readfile-sync,
to read from file. */

//fs.readFileSync()

fs.readFileSync('quadraticInputs.csv','utf-8');

