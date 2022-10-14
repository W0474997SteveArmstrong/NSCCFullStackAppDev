function userMenu(){
console.log("The Itsy Bitsy Aardvark");
console.log("");
console.log("Please choose an animal name:");
console.log("a) aardvark");
console.log("b) hippo");
console.log("c) duck");
console.log("d) pelican");
console.log("e) t-rex");
}
userMenu();
const RLS = require('readline-sync');
let choice = function getUserInput(){
    return RLS.question("Enter choice (a-e):");
}
choice(); 
const CHOICEARR=["a","b","c","d","e"];
if (CHOICEARR.includes(CHOICE)) {
    console.log("Please choose an action word ending in 'ed': ");
    console.log("a) jumped");
    console.log("b) flipped");
    console.log("c) looked");
    console.log("d) added");
    console.log("e) squashed");
    
}
else{
    console.log("Please enter a valid choice");
}