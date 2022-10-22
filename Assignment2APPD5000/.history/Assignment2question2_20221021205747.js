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
let fileRead = function fileInput(relativeFilePath, encoding) {
  let line = null;
  line = FS.readFileSync(relativeFilePath, encoding);
  let lineArr = null;
   lineArr = line.split(REGEX);
   return lineArr;
}
  let userInputArrTotal = [];
  //Now loop through the line and split based on comma except the first element
  function loopingLineByLine(lineArr){
  for (const row of lineArr) {
    console.log("Row is:", row);
    //Now we need to split the row based on comma
    innerRowArray.push(row.split(DELIMITER));
    console.log("The InnerRowArray is: ", innerRowArray);
    let userInputPerQuestionDict=null;
    for (let innerRow of innerRowArray) {
      phrase = innerRow[0];
      wordchoice = innerRow.slice(1);
       userInputPerQuestionDict = {
        A:wordchoice[0],
        B:wordchoice[1],
        C:wordchoice[2],
        D:wordchoice[3],
        E:wordchoice[4]
      }
      //inner for loop exit
      //If input entered by user is A, then replace story file with Aardvark
      //without hardcoding A to aardvark.
      console.log("value of userInputDict with A as key:",userInputPerQuestionDict.A);
      console.log("Phrase is:", phrase);
      console.log("Wordchoice is:", wordchoice);
      console.log("Please choose", phrase + ":");
      displayMenu(wordchoice);
      //Take valid input from the user
      usrInp();
      //Stores all of the user entered choices to every multiple choice question
      userInputArrTotal.push(userInput);
      if(userInputArrTotal.includes(A)){
        fileRead("files/the_story_file.txt", "utf-8");
        
      }
      //User selected choice is reset after every iteration / multiple choice question.
      userInput = null;
      console.log("");
    }
    //We will have each word of a line as an item in the Array and
    //at the end of each iteration we empty the
    //array items, so that only the next line gets populated in the next iteration.
    innerRowArray.pop();
  }
  //outer for loop exit
}
//function exit
//Method Overloading
loopingLineByLine(fileRead("files/the_choices_file.csv", "utf-8"));
console.log("UserInputArray is:", userInputArrTotal);

