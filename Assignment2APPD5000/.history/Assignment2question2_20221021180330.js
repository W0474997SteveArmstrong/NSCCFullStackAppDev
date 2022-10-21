const CHOICEARR = ["a", "b", "c", "d", "e"];
const REGEX = /\r?\n/;
const FS = require("fs");
const RLS = require("readline-sync");
let wordchoice = null;
console.log("The Itsy Bitsy Aardvark");
console.log("");
//1.Display AnimalName Menu
function displayMenu(wordchoice) {
  console.log("a) " + wordchoice[0]);
  console.log("b) " + wordchoice[1]);
  console.log("c) " + wordchoice[2]);
  console.log("d) " + wordchoice[3]);
  console.log("e) " + wordchoice[4]);
}
//Every line in the choices_file is read line by line and is stored in the
//line variable.
const line = FS.readFileSync("files/the_choices_file.csv", "utf-8");
const lineArr = line.split(REGEX);
// console.log("LineArr is: ", lineArr);
// console.log("The line is: ", line);
let innerRowArray = [];
let userInput = null;
let phrase = null;
let flag = 0;
let usrInp = function getUserInput() {
  userInput = RLS.question("Enter choice (a-e):").toLowerCase();
  while (0 == userInput) {
    userInput = RLS.question("Enter choice (a-e):").toLowerCase();
  }
  return userInput;
};

function loopUntilUserEntersValidInput(flag) {
    while (0 === flag) {
      usrInp();
      //3. check if new input taken is correct
      if (CHOICEARR.includes(userInput)) {
        //4 correct input
        // End of Program
        flag = 1;
      }
    }
  }

//Now loop through the line and split based on comma except the first element
for (const row of lineArr) {
  console.log("Row is: ", row);
  //Now we need to split the row based on comma
  innerRowArray.push(row.split(","));
  console.log("The InnerRowArray is: ",innerRowArray);
  for (let innerRow of innerRowArray) {
    phrase = innerRow[0];
    wordchoice = innerRow.slice(1);
    console.log("Phrase is:", phrase);
    console.log("Wordchoice is:", wordchoice);
    console.log("Please choose",phrase+":");
    displayMenu(wordchoice);
    //Add valid input condition
    loopUntilUserEntersValidInput(0)
    usrInp();
    console.log("");
  }
  innerRowArray.pop();
 }

// function checkIfInputIsValidWithoutDisplayingActionMenu() {
//   //3 checks if Input is Correct
//   if (CHOICEARR.includes(userInput)) {
//     //4 correct input
//     //6.End of program
//     flag = 1;
//   }
//   //7.invalid input
//   else {
//     //2.Ask for user input again.
//     //User Input is taken until the user
//     //enters a valid input.
//     loopUntilUserEntersValidInput(0);
//   }
// }
// //3. Check if the input is correct or not
// function checkIfInputIsValidDisplayingActionMenu() {
//   if (CHOICEARR.includes(userInput)) {
//     //4.correct input
//     //5 display action menu
//     displayActionWordMenu();
//     //2 Take userInput for action menu
//     usrInp();
//     //3 or 6
//     checkIfInputIsValidWithoutDisplayingActionMenu();
//     //5.Program ends here in this valid input scenario
//   } else {
//     loopUntilUserEntersValidInput(0);
//     displayActionWordMenu();
//     usrInp();
//     if (CHOICEARR.includes(userInput)) {
//       //4.correct input
//       //program exit
//     } else {
//       loopUntilUserEntersValidInput(0);
//     }
//   }
// }
// //3.Check if the input is valid or not
// checkIfInputIsValidDisplayingActionMenu();
