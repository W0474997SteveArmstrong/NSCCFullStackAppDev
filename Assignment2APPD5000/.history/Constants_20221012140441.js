// Using this file to maintain all the globally scoped constants of Assignment2
// Question1 and Question2 in a single place.
//To achieve this, an import was added to the js file at the top and a line
//was added in the package.json file called "type":"module"
//"The file was renamed with .cjs file extension as prompted by the console"
//"Need to further investigate why a normal .js file wasnt used"
export const RLS = require('readline-sync');
export const CHOICE = RLS.question("Enter choice (a-e):");
export const CHOICEARR = ["a","b","c",'d',`e`];
export const NAME="name";
