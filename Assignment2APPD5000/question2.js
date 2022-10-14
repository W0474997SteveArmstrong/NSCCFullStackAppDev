const CHOICEARR = ["a", "b", "c", "d", "e"];
const RLS = require('readline-sync');
//1.Display AnimalName Menu
function displayAnimalNameMenu() {
    console.log("The Itsy Bitsy Aardvark");
    console.log("");
    console.log("Please choose an animal name:");
    console.log("a) aardvark");
    console.log("b) hippo");
    console.log("c) duck");
    console.log("d) pelican");
    console.log("e) t-rex");
}
displayAnimalNameMenu();
function displayActionWordMenu() {
    console.log("Please choose an action word ending in 'ed': ");
    console.log("a) jumped");
    console.log("b) flipped");
    console.log("c) looked");
    console.log("d) added");
    console.log("e) squashed");
}
//2.Take user input
let userInput = null;
let usrInp = function getUserInput() {
    userInput = RLS.question("Enter choice (a-e):");
    return userInput;
}
usrInp();
//3
let flag = 0;
function checkIfInputIsValidWithoutDisplayingActionMenu() {
    if (CHOICEARR.includes(userInput)) {
        //4 correct input
        //End of program
    }
    //7.invalid input
    else {
        //7.Ask for user input again
        usrInp();
        //3. check if input is correct
        while (flag = 0) {
            if ((CHOICEARR.includes(userInput))) {
                //4 correct input
                // End of Program
            }
            else {

            }
        }
    }
}
//3. Check if the input is correct or not
function checkIfInputIsValidDisplayingActionMenu() {
    if (CHOICEARR.includes(userInput)) {
        //4.correct input
        console.log("UserInput: ", userInput);
        //5 display action menu
        displayActionWordMenu();
        //2 Take userInput for action menu
        usrInp();
        //3 or 6
        checkIfInputIsValidWithoutDisplayingActionMenu();
        //5.Program ends here in this valid input scenario
    }
    else {

    }
}
//3.Check if the input is valid or not.
checkIfInputIsValidDisplayingActionMenu();

// //first time method call for animal name. User entered a valid input
// //3.Check if the input is correct or not.
// if (CHOICEARR.includes(usrInp())) {
//     //4. Display actionword menu since the input is valid
//     actionWordMenu();
//     //Method call again for the action word.
//     //2takesinput
//     usrInp();
//     //3 checks if input is valid or not
//     checkIfInputIsValid();
//5.Program ends here in this valid input scenario



//6 Else is entered for invalid input scenario
// if ("") {
//     console.log("Incorrect input, please enter a valid input");
//     //7.for taking input for animal menu in the event user entered an invalid input
//     usrInp();
//     console.log("UserInput after do is: ", userInput);
//     console.log(CHOICEARR.includes(userInput));
//     //3.Check if input is valid
//     checkIfInputIsValid();
//     else {
//         console.log("Invalid input.Please enter a valid one");
//         usrInp();
//     }
// }