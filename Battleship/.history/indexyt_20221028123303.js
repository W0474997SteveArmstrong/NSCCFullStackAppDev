/*Battleship BackStory && Main Logic Pieces
We need to have two grids.
One for us and the other for the opponent.
We win when we have ships left and the opponent doesn't and vice-versa.
We should be able to see our Grid but keep our opponents Grid hidden.
A Grid is nothin but a 2D Array.
We need to place a ship where there is no ship already present.
We need to hit a certain number of ships to win the game and we have a certain number of tries to do so.
We cannot attack a ship which has already been hit.
*/
const RLS=require('readline-sync');
let myGridsize = null;
let opponentGridsize=null;
const MY_SHIPS=3;
const OPPONENT_SHIPS=3;
const MAXIMUM_TURNS=5;

//An empty object which will later on get populated with the co-ordinates where ships are present.
let opponentLocations={};

while(null==myGridsize){
    myGridsize = parseInt(RLS.question("What size do you want your grid to have?: "));
    while(0===myGridsize){
        myGridsize=parseInt(RLS.question("Please enter a non-zero grid size: "));
    }
}
while(null==opponentGridsize){
    opponentGridsize=parseInt(RLS.question("What size grid would you want your opponent to have?: "));
    while(0===opponentGridsize){
        opponentGridsize=parseInt(RLS.question("Please enter a non-zero opponent grid size: "));
    }
}

/*This method makes a Grid which has empty tilda values.It forms our template.
This grid will later on be printed again after we finish populating it with ships.
function invocation and return value (Grid) storage.*/
let myGrid = makeGrid(myGridsize);
let opponentGrid =  makeGrid(opponentGridsize);

    /*method invocation to print the opponent's Grid and our own Grid.Boolean value true in case of 
    enemy and for our grid it is false*/
    printGrid(opponentGrid,true);
    printGrid(myGrid,false);

/*After we create the grid and print it, we try to place the ship in each iteration.
We ask the user for the ship's co-ordinates in each iteration.*/
for (let index = 0; index < myGridsize; index++) {
  let x = null;
  //will always ask the question atleast once
  while (null == x) {
    x = RLS.question(
      "Enter the x- co-ordinate for your ship number " + index + ": "
    );
    //will enter the loop only in the case of invalid input
    while (x >= myGridsize) {
      x = RLS.question(
        "Please enter a valid x co-ordinate which must be less than or equal to your chosen grid size of " +
          myGridsize +": "
      );
    }
  }
  let y = null;
  //will always ask the question atleast once
  while (null == y) {
    y = RLS.question(
      "Enter the y- co-ordinate for your ship number " + index + ": "
    );
    //will enter the loop only in the case of invalid input
    while (y >= myGridsize) {
      y = RLS.question(
        "Please enter a valid y co-ordinate which must be less than or equal to your chosen grid size of " +
          myGridsize +": "
      );
    }
  }
  /*After getting valid co-ordinates from the user, we place the ship based on those
  co-ordinates in each iteration.*/
  placeShipInGrid(x, y, "O", myGrid);
  placeShipRandomlyInOpponentGrid("O",opponentGrid,opponentGridSize);
  //After placing the Ships, we print the Grid now to witness our changes
  printGrid(opponentGrid, true);
  printGrid(myGrid, false);
}
//exit for loop
//The above block of code (for loop and contents within) can be summarized to perform the follows:
//a)ask user for inputs in each iteration
//b)place ships in each iteration based on the user supplied co-ordinates
//c)print the new Grid which contains ships in each iteration

//gameplay




/*To place the ship in the Grid, we just need to extract the item from the grid(array)
and assign it to the shipCharacter.This method is called only after 
gridArray is populated with all the necessary values so that we dont have to loop
multiple times.*/
function placeShipInGrid(x,y,shipCharacter,gridArr){
    /*y-co-ordinate is the index of the outer grid.
    x co-ordinate is the index of the inner grid.*/
    gridArr[y][x] = shipCharacter;
}

function placeShipRandomlyInOpponentGrid(shipCharacter,opponentGrid,opponentGridSize ){
    /*Logic:
    The opponent must not place a ship at an index position where there is a ship
    already*/
    let isShipPresentAtIndex = false;
    //Always enters the while loop.We use a loop to continue to randomly generate co-ordinates until the co-ordinate we use has no ship present.
     while(!isShipPresentAtIndex){
        let x = getRandomInt(opponentGridSize);
        let y = getRandomInt(opponentGridSize);
        /*create another grid to keep track of ships already present in cells.
        We do this because it is possible that the randomly generated co-ordinates can be the co-ordinates where a ship is already present.
        We are checking to see if there is a ship at the mentioned co-ordinate or not.*/
        if(!opponentLocations[`${x}-${y}`]){
          //Places the ship only if no other ship is present at the mentioned co-ordinates.
          placeShipInGrid(x,y,shipCharacter,gridArr);
          isShipPresentAtIndex=true; //this helps us to break from the while loop.(runs the loop only once)
          opponentLocations[`${x}-${y}`]=true; //this helps us to break from the if statement which allows us to not make the mistake of placing
          //a ship at a location where there is a ship already.
          
        }
     }
}

function getRandomInt(opponentGridSize){
  //gives us a value ranging from 0,1..till (opponentGridsize-1) So if opponent grid size is 3 then  0,1,2.
    return Math.floor(Math.random() * Math.floor(opponentGridSize));
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
//function exit




function makeHeaders(size){
    /*Adding space between the headers
    Adding the first space so that row index and col index won't clash.
    There are two kinds of space we use: 1)space between the row indices and the col header and 
    2) space between each col header.*/
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
                /*if it is not the opponent or if it is the opponent but their ship is
                not there*/
                else{
                        gridRow+=eachCellInGrid+' ';
                }
            }
            //inner for loop exit
            console.log(gridRow);
    }//for loop exit
    if(!isOpponent){
        
        console.log(myGrid);
    }
}
//printGrid() function exit

/*determines if attack is a hit or a splash
function returns a boolean so that we can keep track whether we hit a ship or not and can decrement the count of ships we are yet to hit to
finish the game.*/
function attackShip(x,y,gridArr){
  //If there is a ship at the user provided co-ordinates, hit it.
  if(grid[y][x]=="O"){
    grid[y][x]=="H";
    return true;
  }
  //If there is no ship at the user provided co-ordinates, then we splash.
  else if(grid[y][x]=="~"){
    grid[y][x]="S";
    return false;
  }
  /*this means we are trying to hit a ship/co-ordinate we already hit or a co-ordinate we already splashed.And we don't want to mark something
  we already hit as a hit so we return false;*/
  else{
    return false;
  }
}

