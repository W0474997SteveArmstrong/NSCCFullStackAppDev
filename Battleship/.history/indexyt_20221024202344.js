/*Battleship BackStory
We need to have two grids.
One for us and the other for the opponent.
We should be able to see our Grid but keep our opponents Grid hidden.
A Grid is nothin but a 2D Array.*/

const RLS=require('readline-sync');
let myGridsize = null;
let opponentGridsize=null;
const MY_SHIPS=3;
const OPPONENT_SHIPS=3;
const MAXIMUM_TURNS=5;  
while(null==myGridsize || myGridsize==0){
    myGridsize = RLS.question("What size do you want your grid to have?: ");
}
while(null==opponentGridsize || opponentGridsize==0){
    opponentGridsize=RLS.question("What size would you want your enemy grid to have?: ");
}


for (let index = 0; index < MAXIMUM_TURNS; index++) {
  let x = require("Enter the x- co-ordinate for your ship number "+i);
  let y = require("Enter the y- co-ordinate for your ship number "+i);

  placeCharacter(x,y,'O',my)
}



//creates a multidimensional array
function makeGrid(size){
    //Initialize the outer grid
    let gridArr=[];
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        /*At every index of the outer grid, an empty grid is created unitl 
        index=size-1 of the grid.*/
        gridArr[rowIndex]=[];
        for (let colIndex = 0; colIndex < size; colIndex++) {
            /*Our grids are square grids. like 3x3 , 9x9, 4x4 etc.
            Every position in our grid starts off as a '~'
            When we hit a ship, it marks the hit with the letter 'H'
            When we miss, it marks it as a splash with the letter 'S' */
            gridArr[rowIndex][colIndex]='~';
             
        }
        //inner for loop exit
    }
    //outer for loop exit
    return gridArr;
}
//function exit

//function invocation and return value (Grid) storage.
let myGrid = makeGrid(myGridsize);
let opponentGrid =  makeGrid(opponentGridsize);


function makeHeaders(size){3
    /*Adding space between the headers
    Adding the first space so that row index and col index won't clash.
    There has to be a space between the row indices and the col header and
    space between each col header.*/
    const doublespacebtwnRowIndexAndColHeader ='  ';
    let result =doublespacebtwnRowIndexAndColHeader;
    const singlespacebtwnColHeaders=' ';
    for (let index = 0; index < size; index++) {
        result+=index+singlespacebtwnColHeaders;
    }
    return result;
}

/*We create a function which prints our Grid but doesn't print our opponent's Grid
based on a boolean value called isOppponent*/
function printGrid(gridArr,isOpponent){

    const header = makeHeaders(gridArr.length);
    console.log(header);
    for (let rowIndex = 0; rowIndex < gridArr.length; rowIndex++) {
            const singleSpaceBtwnRowIndexAndColValue =' ';
            let gridRow = rowIndex + singleSpaceBtwnRowIndexAndColValue;
            for (const eachCellInGrid of gridArr[rowIndex]) {
                /*If it is the opponent and one of their ships is placed as an item
                on the grid, then we musn't be able to see their grid.If it is
                not the opponent then it is our grid and we are allowed to see that.*/
                if(isOpponent && eachCellInGrid=="O"){
                    gridRow += '- ';
                }
                /*if it is not the opponent or of it is the opponent but their ship is
                not there*/
                else{
                        gridRow+=eachCellInGrid+' ';
                }
            }
            //inner for loop exit
            console.log(gridRow);
    }
    if(!isOpponent){
        
        console.log(myGrid);
    }
}
//printGrid() function exit
    /*method invocation to print the opponent's Grid.Boolean value true in case of 
    enemy and for our grid it is false*/
    printGrid(opponentGrid,true);
    printGrid(myGrid,false);
