const CHOICEARR = ["A", "B", "C", "D", "E"];
//Creating below global variables to reduce code duplication by 10x.
//Used as keys in UserInput Dictionary.
const A = "A";
const B = "B";
const C = "C";
const D = "D";
const E = "E";
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
  while (0 == userInput || null == userInput ||!CHOICEARR.includes(userInput)) {
    userInput = RLS.question("Enter choice (a-e):").toUpperCase();
  }
  return userInput;
};
let fileRead = function fileInput(relativeFilePath, encoding) {
  let line = null;
  line = FS.readFileSync(relativeFilePath, encoding);
  let lineArr = null;
  lineArr = line.split(REGEX);
  return lineArr;
};
let userInputArrTotal = [];
//Now loop through the line and split based on comma except the first element
function loopingLineByLine(lineArr) {
  for (const row of lineArr) {
    console.log("Row is:", row);
    innerRowArray.push(row.split(" "));
    console.log("The InnerRowArray is: ", innerRowArray);
    let userInputPerQuestionDict = null;
    let counter=0;
    // for (let innerRow of innerRowArray) {
      
      
    //   //Take valid input from the user
    //   usrInp();
    //   //Stores all of the user entered choices to every multiple choice question
    //   userInputArrTotal.push(userInput);
      
    // }
  }
}
//Method Overloading
loopingLineByLine(fileRead("files/the_story_file.txt", "utf-8"));
