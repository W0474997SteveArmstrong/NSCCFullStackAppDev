const CHOICEARR = ["a", "b", "c", "d", "e"];
const REGEX = /\r?\n/;
const FS = require('fs');
const RLS = require('readline-sync');
//1.Display AnimalName Menu
function displayAnimalNameMenu() {

//     console.log("The Itsy Bitsy Aardvark");
//     console.log("");
//     console.log("Please choose an animal name:");
//     console.log("a) aardvark");
//     console.log("b) hippo");
//     console.log("c) duck");
//     console.log("d) pelican");
//     console.log("e) t-rex");


const line = FS.readFileSync("files/the_choices_file.csv", "utf-8");
//
console.log("The line is: ",line);
}
displayAnimalNameMenu();
function displayActionWordMenu() {
    // console.log("Please choose an action word ending in 'ed': ");
    // console.log("a) jumped");
    // console.log("b) flipped");
    // console.log("c) looked");
    // console.log("d) added");
    // console.log("e) squashed");
}
//2.Take user input
let userInput = null;
let usrInp = function getUserInput() {
    userInput = RLS.question("Enter choice (a-e):").
    toLowerCase();
    while (0==userInput) {
        userInput = RLS.question("Enter choice (a-e):").
        toLowerCase();
    }
    return userInput;
}
usrInp();
// let flag = 0;
function loopUntilUserEntersValidInput(flag) {
    while (0 === flag) {
        usrInp();
        //3. check if new input taken is correct
        if ((CHOICEARR.includes(userInput))) {
            //4 correct input
            // End of Program
            flag = 1;
        }
    }
}

function checkIfInputIsValidWithoutDisplayingActionMenu() {
    //3 checks if Input is Correct
    if (CHOICEARR.includes(userInput)) {
        //4 correct input
        //6.End of program
        flag = 1;
    }
    //7.invalid input
    else {
        //2.Ask for user input again. 
        //User Input is taken until the user 
        //enters a valid input.
        loopUntilUserEntersValidInput(0);
    }


}
//3. Check if the input is correct or not
function checkIfInputIsValidDisplayingActionMenu() {
    if (CHOICEARR.includes(userInput)) {
        //4.correct input
        //5 display action menu
        displayActionWordMenu();
        //2 Take userInput for action menu
        usrInp();
        //3 or 6
        checkIfInputIsValidWithoutDisplayingActionMenu();
        //5.Program ends here in this valid input scenario
    }
    else {
        loopUntilUserEntersValidInput(0);
        displayActionWordMenu();
        usrInp();
        if (CHOICEARR.includes(userInput)) {
            //4.correct input
            //program exit 
        }
        else {
            loopUntilUserEntersValidInput(0);
        }
    }
}
//3.Check if the input is valid or not
checkIfInputIsValidDisplayingActionMenu();