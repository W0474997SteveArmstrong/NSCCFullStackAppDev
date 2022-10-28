//Notes for self
//There are 10 rows and 10 columns. (10x10 grid)
//Grid we show the user must also be 10x10

console.log("Let's play Battleship!");
let missileCounter=30;
console.log("You have "+ missileCounter+ " missiles to fire to sink all five ships.");
console.log("");
const RLS= require('readline-sync');
const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX ="\r\n";
const fileContentArr = fileContentStr.split(REGEX);
let innerArrOfFileContentArr = [];
let currentTurn=1;
const MAX_TURNS=30;
const NUMBER_OF_SHIPS=17;


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
            When we hit a ship, it marks the hit with the letter 'H'
            When we miss, it marks it as a splash with the letter 'S' */
            userInputArr[rowIndex][colIndex]=[];
        }
        //inner for loop exit
    }
    //outer for loop exit
    return userInputArr;
}

//for self-testing
// console.table(makeGrid());


for(let row of fileContentArr){
    //Rubric Item
    //On application start, your code will read the contents of the provided ship 
    //grid text file into a two-dimensional
   //array in your program.

    //Each row of the original array is split into a new Array.
    innerArrOfFileContentArr.push(row.split(","));
}

//Logging only for self-testing purpose. Followed rubric instruction that the
//ship map will remain invisible during the gameplay.

// console.log(fileContentArr);
// console.log(innerArrOfFileContentArr);

function makeHeaders(size){
    /*Adding space between the headers
    Adding the first space so that row index and col index won't clash.
    There are two kinds of space we use: 1)space between the row indices and the col header and 
    2) space between each col header.*/
    const triplespacebtwnRowIndexAndColHeader ='   ';
    let result =triplespacebtwnRowIndexAndColHeader;
    const doublespacebtwnColHeaders='  ';
    for (let index = 0; index < size; index++) {
        //converting 0,1,2,3... to its corresponding capitalized alphabet.
        let alphabet=String.fromCharCode(65 + index);
        result+=alphabet+doublespacebtwnColHeaders;
    }
    return result;
}
//for self-testing purpose
// console.log(makeHeaders(fileContentArr.length));


/*We create a function which prints our Grid but doesn't print our opponent's Grid
based on a boolean value called isOppponent*/
function printGrid(userInputArr){
    const header = makeHeaders(userInputArr.length);
    console.log(header);
    for (let rowIndex = 0; rowIndex < userInputArr.length; rowIndex++) {
            const doubleSpaceBtwnRowIndexAndColValue ='  ';
            let gridRow = rowIndex+1 + doubleSpaceBtwnRowIndexAndColValue;
            for (const eachCellInGrid of userInputArr[rowIndex]) {
                        gridRow+=eachCellInGrid+'  ';
                }//inner for loop exit
                console.log(gridRow);
            }//for loop exit    
    }
//printGrid() function exit

    printGrid(makeGrid());

        const usrCoordinates = RLS.question("Choose your target (Ex A1):");
        //After choosing the target, we must attack the target.
        //if you hit it then---> "HIT!!!!!";
        //if you miss it then--->"Miss";
        //How do u identify ur input as an array location?
        //If u identify your input to an array location, then u can map it
        //to whatever u want.
        //How do u compare if u hit a ship or u splashed some water?
        //Convert letter back to number.
        //We will worry about doing it once first.
        //Later on we can do it for n number of times.

        let usrCoordinateArr = usrCoordinates.split("");
        console.log(usrCoordinateArr);
        //Convert alphabet to number
        let usrCoordinateColIndex = usrCoordinateArr[0].charCodeAt(0)-65;
        //Since row is numbered from 1 but items are counted from index position,
        //we subtract with -1 to map correctly.
        let usrCoordinateRowIndex = parseInt(usrCoordinateArr[1])-1;

        if("1"===fileContentArr[usrCoordinateColIndex][usrCoordinateRowIndex]){
            console.log("HIT!!!!!");
            missileCounter--;
            console.log("You have "+ missileCounter +" missiles remaining");
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



   



