// This Assignment2 question1 tests the knowledge of readfilesync
let COUNTER=1;
//Here fs means file synchronus
const fs = require('fs');
let totalModifiedLineArr=[];
const REGEX=/\r?\n/;
//The path used to fetch the file location is the relative path.
//utf-8 is the encoding format used to prevent reading gibberish content.

let finalArr = function fileRead(fs){
fs.readFileSync("files/fileUsedForReading.txt",'utf-8').
split(REGEX).forEach(function(line){
    if(20<line.length){
        let lowercaseLine = line.toLowerCase();
        let modifiedLine = COUNTER++ +":"+" "+lowercaseLine;
        let modifiedLineArr = modifiedLine.split();
        //
        totalModifiedLineArr.push(modifiedLineArr);
        console.log("ModifiedLine: ",modifiedLine);
    }
    else{
        let uppercaseLine = line.toUpperCase();
        let modifiedLine =COUNTER++ +":"+" "+uppercaseLine; 
        let modifiedLineArr=modifiedLine.split();
        totalModifiedLineArr.push(modifiedLineArr);
        console.log("ModifiedLine: ",modifiedLine);
    }
    // console.log("Logging the line:"+line);

});
return totalModifiedLineArr;
}
finalArr(fs);
function randomRemoveElementOfArr(finalArr){
        const element = finalArr[Math.floor(Math.random()*finalArr.length)];
        console.log("FinalArr length before pop is: ",finalArr.length);
        finalArr.pop(element);
        console.log("The element is: ",element);
    console.log("FinalArr length after pop is: ",finalArr.length);
    console.log("Final Arr is: ",finalArr);
}
randomRemoveElementOfArr(totalModifiedLineArr);
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
