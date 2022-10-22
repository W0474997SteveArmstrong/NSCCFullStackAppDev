const CHOICEARR = ["A", "B", "C", "D", "E"];
//Creating below global variables to reduce code duplication by 10x.
//Used as keys in UserInput Dictionary. 
const A ="A";
const B="B";
const C="C";
const D="D";
const E="E";
const REGEX = /\r?\n/;
const FS = require("fs");
const RLS = require("readline-sync");
const DELIMITER = ",";
let wordchoice = null;
console.log("The Itsy Bitsy Aardvark");
console.log("");
//1.Display Menu
function displayMenu(wordchoice) {
  console.log("a) " + wordchoice[0]);
  console.log("b) " + wordchoice[1]);
  console.log("c) " + wordchoice[2]);
  console.log("d) " + wordchoice[3]);
  console.log("e) " + wordchoice[4]);
}
//Every line in the choices_file is read line by line and is stored in the
//line variable.
let innerRowArray = [];
let userInput = null;
let phrase = null;
let usrInp = function getUserInput() {
    while (
      0 == userInput ||
      null == userInput ||
      !CHOICEARR.includes(userInput)
    ) {
      userInput = RLS.question("Enter choice (a-e):").toUpperCase();
    }
    return userInput;
  };
function fileRead(relativeFilePath, encoding) {
  let line = null;
  line = FS.readFileSync(relativeFilePath, encoding);
  let lineArr = null;
  lineArr = line.split(REGEX);
  let userInputArr = [];
  //Now loop through the line and split based on comma except the first element
  for (const row of lineArr) {
    console.log("Row is: ", row);
    //Now we need to split the row based on comma
    innerRowArray.push(row.split(DELIMITER));
    console.log("The InnerRowArray is: ", innerRowArray);
    for (let innerRow of innerRowArray) {
      phrase = innerRow[0];
      wordchoice = innerRow.slice(1);
      let userInputDict = {
        A:wordchoice[0],
        B:wordchoice[1],
        C:wordchoice[2],
        D:wordchoice[3],
        E:wordchoice[4]
      }
       userInputDict.A
      console.log("Phrase is:", phrase);
      console.log("Wordchoice is:", wordchoice);
      console.log("Please choose", phrase + ":");
      displayMenu(wordchoice);
      //Take valid input from the user
      usrInp();
      //Stores all of the user entered choices to every multiple choice question
      userInputArr.push(userInput);
      //User selected choice is reset after every iteration / multiple choice question.
      userInput = null;
      console.log("");
    }
    //We will have each word of a line as an item in the Array and
    //at the end of each iteration we empty the
    //array items, so that only the next line gets populated in the next iteration.
    innerRowArray.pop();
  }
  console.log("UserInputArray is:", userInputArr);
}

fileRead("files/the_choices_file.csv", "utf-8");

// console.log("LineArr is: ", lineArr);
// console.log("The line is: ", line);


//Use that input to replace the placeholders in story file.
// fileRead("files/the_story_file.txt", "utf-8");

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
