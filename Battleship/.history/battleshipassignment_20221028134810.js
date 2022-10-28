//Notes for self
//There are 10 rows and 10 columns. (10x10 grid)
//Grid we show the user must also be 10x10

console.log("Let's play Battleship!");
let missileCounter=30;
console.log("You have "+ missileCounter+ " missiles to fire to sink all five ships.");
console.log("");

const { log } = require('console');
const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX ="\r\n";
const fileContentArr = fileContentStr.split(REGEX);
let innerArrOfFileContentArr = [];


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
            Every position in our grid starts off as a '~'
            Later on, after we finish placing our ships and attack,
            When we hit a ship, it marks the hit with the letter 'H'
            When we miss, it marks it as a splash with the letter 'S' */
            userInputArr[rowIndex][colIndex]='~';
             
        }
        //inner for loop exit
    }
    //outer for loop exit
    return userInputArr;
}

console.table(makeGrid());


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

size=fileContentArr.length
function makeHeaders(size){
    /*Adding space between the headers
    Adding the first space so that row index and col index won't clash.
    There are two kinds of space we use: 1)space between the row indices and the col header and 
    2) space between each col header.*/
    const doublespacebtwnRowIndexAndColHeader ='  ';
    let result =doublespacebtwnRowIndexAndColHeader;
    const singlespacebtwnColHeaders=' ';
    for (let index = 0; index < size; index++) {
        //converting 0,1,2,3 to its corresponding alphabet.
        let alphabet=String.fromCharCode(65 + index);
        result+=alphabet+singlespacebtwnColHeaders;
    }
    return result;
}
console.log(makeHeaders(10));



