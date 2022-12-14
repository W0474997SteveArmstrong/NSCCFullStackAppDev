//Notes for self
//There are 10 rows and 10 columns. (10x10 grid)
//Grid we show the user must also be 10x10


console.log("Let's play Battleship!");
let missileCounter=3;
const NUMBER_OF_SHIPS=3;
console.log("You have "+ missileCounter+ " missiles to fire to sink all "+NUMBER_OF_SHIPS+" ships.");
console.log("");
const RLS= require('readline-sync');
const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX ="\r\n";
const fileContentArr = fileContentStr.split(REGEX);
let innerArrOfFileContentArr = [];
const MAX_TURNS=3;


for(let row of fileContentArr){
    //Rubric Item
    //On application start, your code will read the contents of the provided ship 
    //grid text file into a two-dimensional
   //array in your program.

    //Each row of the original array is split into a new Array.
    innerArrOfFileContentArr.push(row.split(","));
}


// console.log(fileContentArr);
// console.log("innerArrOfFileContentArr",innerArrOfFileContentArr);

//creates a multidimensional array
function makeGrid(){
    //Initialize the outer grid
    let userInputArr=[];
    for (let rowIndex = 0; rowIndex < (fileContentArr.length); rowIndex++) {
        /*At every index of the outer grid, an empty grid is created unitl 
        index=size-1 of the grid.*/
        userInputArr[rowIndex]=[];
        for (let colIndex = 0; colIndex <(fileContentArr.length); colIndex++) {
            /*Our grids are square grids. like 3x3 , 9x9, 4x4 etc.
            Every position in our grid starts off as a empty []
            Later on, after we finish placing our ships and attack,
            When we hit a ship, it marks the hit with the letter 'X'
            When we miss, it marks it as a splash with the letter 'O' */
            userInputArr[rowIndex][colIndex]=[];
        }
        //inner for loop exit
    }
    //outer for loop exit
    return userInputArr;
}

let userInputArr = makeGrid();

//for self-testing
// console.table(makeGrid());
// console.log("userInputArr after makeGrid() is: ",userInputArr);



//Logging only for self-testing purpose. Followed rubric instruction that the
//ship map will remain invisible during the gameplay.



function makeHeaders(size){
    /*Adding space between the headers
    Adding the first space so that row index and col index won't clash.
    There are two kinds of space we use: 1)space between the row indices and the col header and 
    2) space between each col header.*/
    const doublespacebtwnRowIndexAndColHeader ='  ';
    let result =doublespacebtwnRowIndexAndColHeader;
    const doublespacebtwnColHeaders='  ';
    for (let index = 0; index < size; index++) {
        //converting 0,1,2,3... to its corresponding capitalized alphabet.
        let alphabet=String.fromCharCode(65 + index);
        result+=alphabet+doublespacebtwnColHeaders;
    }
    return result;
}


function printGrid(userInputArr){
    const header = makeHeaders(userInputArr.length);
    console.log(header);
    for (let rowIndex = 0; rowIndex < userInputArr.length; rowIndex++) {
            const fourSpaceBtwnRowIndexAndColValue ='    ';
            let gridRow = rowIndex+1 + fourSpaceBtwnRowIndexAndColValue;
            for (const eachCellInGrid of userInputArr[rowIndex]) {
                        gridRow+=eachCellInGrid+'  ';
                }//inner for loop exit
                console.log(gridRow);
            }//for loop exit    
    }
//printGrid() function exit

function gameplay(userInputArr){
    let numHits=0;
    let hitsCountMap = new Map();
    let flag=0;
for(let currentTurn=1;currentTurn<=MAX_TURNS;currentTurn++){
    printGrid(userInputArr);
   let indicesArr = getUserInput();
//    console.log("indicesArr at the start of each iteration",indicesArr);
   let userInputArrInsideAttackShip=null;
   let userInputArrMap = new Map();
   userInputArrMap= attackShip(indicesArr,userInputArr,hitsCountMap,numHits);   
   for(let userInputArrayKey of userInputArrMap.keys()){
        userInputArrInsideAttackShip=userInputArrayKey;
   }
    // console.log("NumHits after attack is:",numHits);
    numHits=userInputArrMap.get(userInputArr);
    // console.log("userInputArr inside GamePlay",userInputArrInsideAttackShip);
    userInputArr=userInputArrInsideAttackShip;
    // console.log("usrInputArr after assigning value of attackShip",userInputArr);
    // console.log("CURRENT tURN IS: ",currentTurn);
    indicesArr=[];    
        if (NUMBER_OF_SHIPS == numHits) {
            flag=1;
            printGrid(userInputArr);
            console.log("YOU SANK MY ENTIRE FLEET!");
            console.log("YOU HAD "+numHits+" of "+NUMBER_OF_SHIPS+" hits, which sank all the ships");
            console.log("You won, congratulations!");
            break;
          }
          else if(NUMBER_OF_SHIPS!=numHits){
            console.log("You have "+ missileCounter +" missiles remaining");
            if(0==missileCounter){
                printGrid(userInputArr);
                console.log("GAME OVER.");
            console.log("You had "+ numHits+" of "+NUMBER_OF_SHIPS+" hits, but didn't sink all the ships.");
            console.log("Better luck next time.");
            }
          }
    // console.log("indicesArr at end of each iteration",indicesArr);
}
}
gameplay(userInputArr);

function getUserInput(){
    let usrInputArray = [];
    const usrCoordinates = RLS.question("Choose your target (Ex A1):");
    let usrCoordinateArr = usrCoordinates.split("");
        // console.log(usrCoordinateArr);
        let usrCoordinateColIndex=null;
        let usrCoordinateRowIndex=null;
        if(2== usrCoordinateArr.length){
        //Convert alphabet to number
         usrCoordinateColIndex = usrCoordinateArr[0].charCodeAt(0)-65;
        //Since row is numbered from 1 but items are counted from index position,
        //we subtract with -1 to map correctly.
        usrCoordinateRowIndex = parseInt(usrCoordinateArr[1])-1;
        }
        else{
            usrCoordinateArr=[];
            let usrCoordinateAlphabetStr=usrCoordinates.substring(0,1);
            let usrCoordinateNumberStr =usrCoordinates.substring(1);
            usrCoordinateArr.push(usrCoordinateAlphabetStr,usrCoordinateNumberStr);
            usrCoordinateColIndex = usrCoordinateArr[0].charCodeAt(0)-65;
            //Since row is numbered from 1 but items are counted from index position,
            //we subtract with -1 to map correctly.
            usrCoordinateRowIndex = parseInt(usrCoordinateArr[1])-1;
        }
        //Whatever co-ordinate user is giving in that iteration, use it to the
        //original file content array and see if ship is there..if so hit..else miss
        usrInputArray.push([usrCoordinateRowIndex,usrCoordinateColIndex]);
        // console.log("User Input Array inside getUserInput() is: ",usrInputArray);
        return usrInputArray;
}


function attackShip(indicesArr,userInputArr,hitsCountMap,numHits){
    missileCounter--;
    if("1"===innerArrOfFileContentArr[indicesArr[0][0]][indicesArr[0][1]]){
        console.log("HIT!!!!!");
        userInputArr[indicesArr[0][0]][indicesArr[0][1]] = "X";
        numHits++;
    }
    else if("0"===innerArrOfFileContentArr[indicesArr[0][0]][indicesArr[0][1]]){
        console.log("Miss");
        userInputArr[indicesArr[0][0]][indicesArr[0][1]] = "O";
    }
    hitsCountMap.set(userInputArr,numHits);
    return hitsCountMap;
}



        //Statements to be printed in the event of a win or loss.

        // console.log("HIT!!!!!");
        // console.log("YOU SANK MY ENTIRE FLEET!");
        // console.log("YOU HAD 17 of 17 hits,which sank all the ships");
        // console.log("You won congratulations!");
        // console.log("Miss");
        // console.log("You have "+ 0 +" missiles remaining");
        // console.log("GAME OVER.");
        // console.log("You had "+ missileCounter+" of "+NUMBER_OF_SHIPS+" hits, but didn't sink all the ships.");
        // console.log("Better luck next time.");



   



