// Using this file to maintain all the globally scoped constants of Assignment2
// Question1 and Question2 in a single place.
//To achieve this, an import was added to the js file at the top and a line
//was added in the package.json file called "type":"module"
//
const RLS = require('readline-sync');
const CHOICE = RLS.question("Enter choice (a-e):");
const CHOICEARR = ["a","b","c",'d',`e`];