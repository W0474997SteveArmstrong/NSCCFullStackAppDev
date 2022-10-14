const CHOICEARR=["a","b","c","d","e"];
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
function checkIfInputIsValid(){
    if(CHOICEARR.includes(userInput)){
        console.log("UserInput: ",userInput);
        actionWordMenu();
    }
}
//1.Display AnimalName Menu
animalNameMenu();
const RLS = require('readline-sync');
let userInput=null;
//2.Take user input
let usrInp = function getUserInput(){
    userInput = RLS.question("Enter choice (a-e):");
    return userInput;
}

//first time method call for animal name. User entered a valid input
//3.Check if the input is correct or not.
if (CHOICEARR.includes(usrInp())) {
    //4. Display actionword menu since the input is valid
    actionWordMenu();
    //Method call again for the action word.
    usrInp();
    //5.Program ends here in this valid input scenario
}
//6 Else is entered for invalid input scenario
else{
    console.log("Incorrect input, please enter a valid input");
    //7.for taking input for animal menu in the event user entered an invalid input
        usrInp();
        console.log("UserInput after do is: ",userInput);
        console.log(CHOICEARR.includes(userInput));
        //8.
   checkIfInputIsValid();
    else{
        console.log("Invalid input.Please enter a valid one");
        usrInp();
    }
}