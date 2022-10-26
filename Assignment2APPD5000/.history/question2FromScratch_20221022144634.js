//Declaring and initializing the globally scoped variables
const DELIMITER_CHOICES = ",";
const DELIMITER_STORY=" ";
const FS = require("fs");
const RLS = require("readline-sync");
const REGEX = /\r?\n/;
const CHOICEARR = ["A", "B", "C", "D", "E"];

//a) Display the heading
console.log("The Itsy Bitsy Aardvark");
//b) Add the space
console.log("");
//c) displayMenu();
function displayMenu() {
                     //array[0]     array[1]
  console.log("a) " + 'aardvark'); //jumped
  console.log("b) " + 'hippo'); //flipped
  console.log("c) " + 'duck'); //looked
  console.log("d) " + 'pelican'); //added
  console.log("e) " + 't-rex'); //squashed
}

let fileReadChoices = function fileInputChoices(relativeFilePath, encoding) {
    let lineChoices = null;
    lineChoices = FS.readFileSync(relativeFilePath, encoding);
    let lineArrChoices = null;
    lineArrChoices = lineChoices.split(REGEX);
    return lineArrChoices;
  };

  let fileReadStory = function fileInputStory(relativeFilePath, encoding) {
    let lineStory = null;
    lineStory = FS.readFileSync(relativeFilePath, encoding);
    let lineArrStory = null;
    lineArrStory = lineStory.split(REGEX);
    return lineArrStory;
  };

//d) get user input and validate it.
let userInput = null;
let usrInp = function getUserInput() {
    while (0 == userInput || null == userInput || !CHOICEARR.includes(userInput)) {
      userInput = RLS.question("Enter choice (a-e):").toUpperCase();
    }
    return userInput;
  };
  //loop through the line and split based on comma except the first element
  let innerRowChoiceArray = [];
function loopingLineByLineChoices(lineArrChoice) {
    for (const rowChoice of lineArrChoice) {
        console.log("RowChoice is:", rowChoice);
        // RowChoice is: an animal name,aardvark,hippo,duck,pelican,t-rex
        //Now we need to split the row based on comma
        innerRowChoiceArray.push(rowChoice.split(DELIMITER_CHOICES));
        // The InnerRowChoiceArray is:  [
        //     [ 'an animal name', 'aardvark', 'hippo', 'duck', 'pelican', 't-rex' ]
        //   ]

        
    }
    console.log("The InnerRowChoiceArray is: ", innerRowChoiceArray);
    return innerRowChoiceArray;
}
let innerRowStoryArray = [];
 //loop through the line and split based on comma except the first element
 function loopingLineByLineStory(lineArrStory) {
    for (const rowStory of lineArrStory) {
        console.log("RowStory is:", rowStory);
        innerRowStoryArray.push(rowStory.split(DELIMITER_STORY));
    }
    console.log("The InnerRowStoryArray is: ", innerRowStoryArray);
    return innerRowStoryArray;
}

loopingLineByLineChoices(fileReadChoices("files/the_choices_file.csv", "utf-8"));
loopingLineByLineStory(fileReadStory("files/the_story_file.txt", "utf-8"));



