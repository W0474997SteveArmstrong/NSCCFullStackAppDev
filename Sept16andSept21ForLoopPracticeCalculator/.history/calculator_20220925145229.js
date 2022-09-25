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
menuPrint();
/*const menuPrint =  console.log(`
1. Addition
2. Subtraction
3. Multiplication
4. Division
`
)*/
function arithmeticOperations(){

}




    menuPrint();

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

