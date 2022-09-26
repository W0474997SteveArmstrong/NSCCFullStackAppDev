    /*This assignment deals with the use of switch case in the calculator app.
    Knowledge and concepts of functions,arrays,loops,if-else statements,readline-sync have also been implemented. */
    
        const rls = require('readline-sync');
        console.log("********************************");
        console.log(`  Welcome to my calculator `);
        console.log("********************************");
        let flag = 0;
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
        function arithmeticOperations(){
        menuPrint();
        let chosenOperation=null;
        while(null==chosenOperation){
        chosenOperation = Number(rls.question('Please choose the math operation you want to perform by entering the number associated with the operation from the options above: '));
        }
        console.log(" ");
        let firstNum =null;
        let secondNum =null;
        const operationArr = [1,2,3,4];
        if(operationArr.includes(chosenOperation)){
        while(null==firstNum){
        firstNum = Number(rls.question("Please enter any number ranging from 0 to 9: "));
        if(null==firstNum){
            console.log("No input received. Please enter a number ranging from 0 to 9: ")
        }
        }
        console.log(" ");
        while(null==secondNum){
        secondNum = Number(rls.question("Please enter another number ranging from 0 to 9: "));
        if(null==secondNum){
            console.log("No input received. Please enter a number ranging from 0 to 9: ")
        }
        }
        console.log(" ");

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
        }
        flag=2;
        }//If chosen operation in 1,2,3,4 exit
        else if(5==chosenOperation){
            console.log("Thankyou for using the calculator! Have a great day!");
            flag=1;
        }
        else{
            console.log("Invalid input.Please select a valid option corresponding to the math operation you wish to perform ");
            arithmeticOperations();
        }
        }
        arithmeticOperations();
        if(1!=flag){
        let question = rls.question("If you want to exit calculation, type Y else type N: ");
        let invInput = null;
        function appExitOrRun(invInput){
        if (question=="N"){
            arithmeticOperations();
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
    }

