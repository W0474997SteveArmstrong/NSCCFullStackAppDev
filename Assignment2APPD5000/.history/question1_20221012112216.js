// This Assignment2 question1 tests the knowledge of readfilesync
let COUNTER = 1;
//Here fs means file synchronus
const fs = require("fs");
let totalModifiedLineArr = [];
const REGEX = /\r?\n/;
let finalArr = function fileRead(fs) {
  //The path used to fetch the file location is the relative path.
  //utf-8 is the encoding format used to prevent reading gibberish content.
  fs.readFileSync("files/fileUsedForReading.txt", "utf-8")
    .split(REGEX)
    .forEach(function (line) {
      if (20 < line.length) {
        let lowercaseLine = line.toLowerCase();
        let modifiedLine = COUNTER++ + ":" + " " + lowercaseLine;
        let modifiedLineArr = modifiedLine.split();
        //Total Modified Line Array is a 2D Array. It adds each line as an array
        //on every iteration of the for loop. At the end of the loop, the entire
        //file contents are stored in it.
        totalModifiedLineArr.push(modifiedLineArr);
        console.log("ModifiedLine: ", modifiedLine);
      } else {
        let uppercaseLine = line.toUpperCase();
        let modifiedLine = COUNTER++ + ":" + " " + uppercaseLine;
        let modifiedLineArr = modifiedLine.split();
        totalModifiedLineArr.push(modifiedLineArr);
        console.log("ModifiedLine: ", modifiedLine);
      }
      // console.log("Logging the line:"+line);
    });
  return totalModifiedLineArr;
};
finalArr(fs);
let arrAfterRemovingElement = function randomRemoveElementOfArr(finalArr) {
  console.log("FinalArr length before splice is: ", finalArr.length);
  const finalArrRandomIndex= Math.floor(Math.random() * finalArr.length);
  console.log("FinalArrRandomIndex is: "+finalArrRandomIndex);
  finalArr.splice(finalArrRandomIndex,1);
  console.log("FinalArr length after splice is: ", finalArr.length);
  console.log("Final Arr is: ", finalArr);
  return finalArr;
}
let expectedOutput = arrAfterRemovingElement(totalModifiedLineArr).join("\n");
console.log("--------------------------------");
console.log()
console.log("ExpectedOutput is: ",expectedOutput);
//displays the original text in the file on screen

// //converts String to array
// // const fileContentsArr = fileContents.split(" ");
// //Displays the orginal contents of the file which are now found in the Array
// console.log("The contents in the text file which are stored in Array format is:",
// fileContentsArr);
// //Modifies contents in the Array
// fileContentsArr.push('Hexagon');
// //Displays the array having modified contents
// console.log("The Modified array is:",fileContentsArr);
// //converts Array back to String
// const txtStrToBeWrittenIntoFile =  fileContentsArr.join(" ");
// //The string gets written into the file.
// fs.writeFileSync("files/fileUsedForWriting.txt",txtStrToBeWrittenIntoFile);
// console.log(txtStrToBeWrittenIntoFile);
