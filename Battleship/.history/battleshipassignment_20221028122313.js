//Notes for self
//There are 10 rows and 10 columns. (10x10 grid)
//Grid we show the user must also be 10x10




const FS = require('fs');
const fileContentStr = FS.readFileSync("map.txt","utf-8");
const REGEX ="\r\n";
const fileContentArr = fileContentStr.split(REGEX);
let innerArrOfFileContentArr = [];
let userInputArr = [];




//creates a multidimensional array
function makeGrid(){
    //Initialize the outer grid
    let gridArr=[];
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        /*At every index of the outer grid, an empty grid is created unitl 
        index=size-1 of the grid.*/
        gridArr[rowIndex]=[];
        for (let colIndex = 0; colIndex < size; colIndex++) {
            /*Our grids are square grids. like 3x3 , 9x9, 4x4 etc.
            Every position in our grid starts off as a '~'
            Later on, after we finish placing our ships and attack,
            When we hit a ship, it marks the hit with the letter 'H'
            When we miss, it marks it as a splash with the letter 'S' */
            gridArr[rowIndex][colIndex]='~';
             
        }
        //inner for loop exit
    }
    //outer for loop exit
    return gridArr;
}



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

