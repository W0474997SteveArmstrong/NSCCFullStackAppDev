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
      } else {
        let uppercaseLine = line.toUpperCase();
        let modifiedLine = COUNTER++ + ":" + " " + uppercaseLine;
        let modifiedLineArr = modifiedLine.split();
        totalModifiedLineArr.push(modifiedLineArr);
      }
    });
  return totalModifiedLineArr;
};
finalArr(fs);
let arrAfterRemovingElement = function randomRemoveElementOfArr(finalArr) {
  const finalArrRandomIndex = Math.floor(Math.random() * finalArr.length);
  finalArr.splice(finalArrRandomIndex, 1);
  return finalArr;
};
let alteredText = arrAfterRemovingElement(totalModifiedLineArr).join("\n");
console.log("--------------------------------");
console.log("AlteredText");
console.log("--------------------------------");
console.log(alteredText);
