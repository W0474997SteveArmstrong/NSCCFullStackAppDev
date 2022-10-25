const FS = require("fs");
const RLS = require("readline-sync");
const MAX_TURNS = 3;
const TOTAL_SHIP_SEGMENTS=2;
let numHits = 0;
//read data into array of arrays
//this will represent the battleGrid
const gridText = FS.readFileSync("map.txt", "utf-8");
//break the text into lines/rows and store them in an array.
const gridRows = gridText.split("\r\n");
// console.log("GridText is:",gridText);
// console.log("GridRows is:",gridRows);
//divide each row into columns and store those columns as an array
//within the larger array.We need to split each row on the ',' seperator.
const battleGrid = [];
for (const row of gridRows) {
  battleGrid.push(row.split(","));
}
console.table(battleGrid);

//Now we want to repeatedly ask the user for coordinates to fire at:
//we're going to ask for an additional shot until one of two things happen:
//either they run out of ammo (LOST) _or_ they sink all the ships (WON).

//See if u can detect when u lose and display game over.
//Sorry. Game Over. You have exhausted your attempts.
let currentTurn = 1;
while (currentTurn <= MAX_TURNS) {
  const row = RLS.question("Please enter row co-ordinate: ");
  const col = RLS.question("Please enter column co-ordinate: ");
  if ("1" === battleGrid[row][col]) {
    console.log("HIT!!");
    numHits++;
    if (TOTAL_SHIP_SEGMENTS === numHits) {
      console.log("YOU WON!");
      console.log("Game Over");
      break;
    }
  } else {
    console.log("SPLASH!!");
    if()
  }
  console.log("CurrentTurn before increment ",currentTurn);
  currentTurn++;
  console.log("CurrentTurn after increment ",currentTurn);
}
console.log("Sorry. Game Over.You have exhausted your attempts.");

