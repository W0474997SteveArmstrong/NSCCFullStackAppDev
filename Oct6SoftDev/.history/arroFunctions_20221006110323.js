function nameOfFunction(param1,param2){
    return (something);
}


//Name of function is not needed. equalgreaterthanArrow is used. RHS of that arrow 
//performs some operation. LHS of the arrow takes in the input. And LHS of the input stores the value (output).
//calling function using variable name with parameters instead of the earlier functionName(param1,param2);
let sum = (param1,param2) => param1+param2;
console.log(sum(1,2));


