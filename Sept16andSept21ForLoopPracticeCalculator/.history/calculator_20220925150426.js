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
if(1<=chosenOperation<=4){
 firstNum = Number(rls.question("Please enter any number ranging from 0 to 9: "));
 secondNum = Number(rls.question("Please enter another number ranging from 0 to 9: "));
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
    default:
        console.log("Invalid input.Please select a valid option corresponding to the math operation you wish to perform ");
        menuPrint();
        break;
}
}
arithmeticOperations();
let question = rls.require("If you want to exit calculation, type Y else type N");
if (question==Y){
    arithmeticOperations();
}
else if(question==N){
    console.log("Thankyou for using the calculator! Have a great day!")
}


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

