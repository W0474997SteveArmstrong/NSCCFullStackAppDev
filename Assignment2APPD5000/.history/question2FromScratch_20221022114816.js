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
    lineArrChoices = line.split(REGEX);
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
function loopingLineByLineChoices(lineArrChoices) {
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

loopingLineByLineChoices(fileReadChoices("files/the_choices_file.csv", "utf-8"));

