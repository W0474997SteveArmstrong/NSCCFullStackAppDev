//Battleship BackStory
//We need to have two grids.
//One for us and the other for the opponent.
//We should be able to see our Grid but keep our opponents Grid hidden.
//A Grid is nothin but a 2D Array.

const RLS=require('readline-sync');
let myGridsize = RLS.question("What size do you like your grid to be?");
let opponentGridsize=RLS.question("What size would you like your enemy grid to be?");

//creates a multidimensional array
function makeGrid(size){
    //Initialize the outer grid
    let gridArr=[];
    for (let index = 0; index < size; index++) {
        //At every index of the outer grid, an empty grid is created unitl 
        //index=size-1 of the grid.
        gridArr[index]=[];
        for (let j = 0; j < array.length; j++) {
            //Our grids are square grids. like 3x3 , 9x9, 4x4 etc.
            //Every position in our grid starts off as a '~'
            //When we hit a ship, it marks the hit with the letter 'H'
            //When we miss, it marks it as a splash with the letter 'S'
            gridArr[index ][j]='~'; 
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


function makeHeaders(size){
    let result ='  ';
    for (let index = 0; index < size; index++) {
        result+=i+' ';
    }
    return result;
}

//We create a function which prints our Grid but doesn't print our opponent's Grid
//based on a boolean value called isOppponent
function printGrid(gridArr,isOpponent){

    const header = makeHeaders(gridArr.length);
    console.log(header);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    if(!isOpponent){
        console.log(myGrid);
    }
}