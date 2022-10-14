function animalNameMenu(){
console.log("The Itsy Bitsy Aardvark");
console.log("");
console.log("Please choose an animal name:");
console.log("a) aardvark");
console.log("b) hippo");
console.log("c) duck");
console.log("d) pelican");
console.log("e) t-rex");
}
function actionWordMenu(){
    console.log("Please choose an action word ending in 'ed': ");
    console.log("a) jumped");
    console.log("b) flipped");
    console.log("c) looked");
    console.log("d) added");
    console.log("e) squashed");
}
animalNameMenu();
const RLS = require('readline-sync');
let usrInp = function getUserInput(){
    let userInput = RLS.question("Enter choice (a-e):");
    return userInput;
}
const CHOICEARR=["a","b","c","d","e"];
//first time method call for animal name. User entered a valid input
if (CHOICEARR.includes(usrInp())) {
    actionWordMenu();
    //Method call again for the action word.
    usrInp();
}
else{
    //for taking input for animal menu in the event user entered an invalid input
    do{
        usrInp();
    }
    console.log(usr);
    while(CHOICEARR.includes(usrInp())){
        actionWordMenu();
    }
    
}