//tell Javascript that we want to use the readline-sync package.
//This assumes that we have already downloaded readline-sync
//by using npm (npm install readline-sync)

const rls = require('readline-sync');

rls.question("Please enter a number");