const rls = require('readline-sync');
console.log("********************************");
console.log(`  Welcome to my calculator `);
console.log("********************************");
/*while(true){

}
How do I print a menu. Done
How do I make the print menu a function*/

function menuPrint(){
    console.log(`
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Exit application
`
);
}

/*const menuPrint =  console.log(`
1. Addition
2. Subtraction
3. Multiplication
4. Division
`
)*/
function arithmeticOperations(){

menuPrint();
const chosenOperation = Number(rls.question('Please choose the math operation you want to perform by entering the number associated with the operation from the options above: '));
let firstNum =null;
let secondNum =null;
console.log(typeof(chosenOperation));
if(1<=chosenOperation<=4){
 firstNum = Number(rls.question("Please enter any number ranging from 0 to 9: "));
 if(null==firstNum){
let firstNumAgain = Number()

 }
 console.log(" ");
 secondNum = Number(rls.question("Please enter another number ranging from 0 to 9: "));
 console.log(" ");
}
else if(5==chosenOperation){
    console.log("Thankyou for using the calculator! Have a great day!");
}
else{
    console.log("Invalid input.Please select a valid option corresponding to the math operation you wish to perform ");
    arithmeticOperations();
}
switch(chosenOperation){
    case 1:
        console.log("The sum of numbers is: ",firstNum+secondNum);
        break;
    case 2:
        console.log("The difference of numbers is: ",firstNum-secondNum);
        break;   
    case 3:
        console.log("The multiplication of numbers is: ",firstNum*secondNum);
        break;
    case 4:
        console.log('The division of numbers is: ',firstNum/secondNum);
        break;    
    case 5:
        console.log("Thankyou for using the calculator! Have a great day!");
        break;      
}
}
arithmeticOperations();
let question = rls.question("If you want to exit calculation, type Y else type N: ");
let invInput = null;
function appExitOrRun(invInput){
if (question=="N"){
    while(true){
    arithmeticOperations();
}
}
else if(question=="Y"){
    console.log("Thankyou for using the calculator! Have a great day!");
}
else{
    invInput = rls.question("Invalid Input please key in option either Y or N: ");
    appExitOrRun(invInput);
}
}
appExitOrRun();


    // menuPrint();

/*if(1<=chosenOperation<=4){
    const firstNum = Number(rls.question("Please enter any number ranging from 0 to 9: "));
    const secondNum = Number(rls.question("Please enter another number ranging from 0 to 9: "));
    if(chosenOperation==1){
        console.log("The sum of numbers is: ",firstNum+secondNum);
    }
    else if(chosenOperation==2){
            console.log("The difference of numbers is: ",firstNum-secondNum);
    }
    else if (chosenOperation==3){
        console.log("The multiplication of numbers is: ",firstNum*secondNum);
    }
    else{
        console.log('The division of numbers is: ',firstNum/secondNum);
    }
}
else{
    const invalidOption = rls.question("Invalid input.Please select a valid option corresponding to the math operation you wish to perform ");
    console.log(menuPrint);
}*/

