console.log("The Itsy Bitsy Aardvark");
console.log("");
console.log("Please choose an animal name:");
console.log("a) aardvark");
console.log("b) hippo");
console.log("c) duck");
console.log("d) pelican");
console.log("e) t-rex");

const rls =require('readline-sync'); 
const CHOICE = rls.question("Enter choice (a-e):");
const CHOICEARR = ["a","b","c",'d',`e`];

if (CHOICEARR.includes(CHOICE)) {
    console.log("Please choose an action word ending in 'ed': ");
    console.log("a) jumped");
    console.log("b) flipped");
    console.log("c) looked");
    console.log("d) added");
    log
}
else{
    console.log("Please enter a valid choice");
}