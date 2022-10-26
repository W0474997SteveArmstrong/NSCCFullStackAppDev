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
    lineArr = line.split(REGEX);
    return lineArr;
  };

  let fileReadStory = function fileInputStory(relativeFilePath, encoding) {
    let line = null;
    line = FS.readFileSync(relativeFilePath, encoding);
    let lineArr = null;
    lineArr = line.split(REGEX);
    return lineArr;
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
function loopingLineByLine(lineArr) {

    for (const row of lineArr) {
        console.log("Row is:", row);
        // Row is: an animal name,aardvark,hippo,duck,pelican,t-rex
        //Now we need to split the row based on comma
        innerRowArray.push(row.split(DELIMITER));
        console.log("The InnerRowArray is: ", innerRowArray);
        // The InnerRowArray is:  [
        //     [ 'an animal name', 'aardvark', 'hippo', 'duck', 'pelican', 't-rex' ]
        //   ]
    }
}

loopingLineByLine(fileRead("files/the_story_file.txt", "utf-8"));

