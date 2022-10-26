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
//d) get user input and validate it.
let userInput = null;
let usrInp = function getUserInput() {
    while (0 == userInput || null == userInput || !CHOICEARR.includes(userInput)) {
      userInput = RLS.question("Enter choice (a-e):").toUpperCase();
    }
    return userInput;
  };


  //Now loop through the line and split based on comma except the first element
function loopingLineByLine(lineArr) {
loopingLineByLine(fileRead("files/the_story_file.txt", "utf-8"));

