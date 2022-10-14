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
let usrInp = function getUserInput(){
    let userInput = RLS.question("Enter choice (a-e):");
    return userInput;
}
const CHOICEARR=["a","b","c","d","e"];
//first time method call for animal name
if (CHOICEARR.includes(usrInp())) {
    console.log("Please choose an action word ending in 'ed': ");
    console.log("a) jumped");
    console.log("b) flipped");
    console.log("c) looked");
    console.log("d) added");
    console.log("e) squashed");
    //Method call again for the 
    usrInp();
}
else{
    while(!CHOICEARR.includes(usrInp)){
    usrInp();
    }
}