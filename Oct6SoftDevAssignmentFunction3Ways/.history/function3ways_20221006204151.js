// Assignment deals with function calls in 3 ways.
//Way1
const nameArr = ["Steve","Annet","Armstrong"];
strFirstName="Luke";
function nameOfFunction(nameArr){
    //Looping through an array
 nameArr.forEach(element => {
        console.log("Hi " +element +"!");
    });

}
//Looping way2.
for (let index = 0; index < nameArr.length; index++) {
    const element = nameArr[index];
    console.log("Hi "+element+"!");
}
//Looping third way
for (const key in nameArr) {
    if (Object.hasOwnProperty.call(nameArr, key)) {
        const element = nameArr[key];
        console.log("Hi "+element+"!");
    }
}
//Looping fourth way Easiest
for (const iterator of nameArr) {
    console.log("Hi "+iterator+"!");
}
nameOfFunction(nameArr);


// Alternate way of doing

function nameOfAnotherFunction(nameArr,strFirstName){

    nameArr.push(strFirstName);
    return nameArr;
}
console.log("Added item to array: "+nameOfAnotherFunction(nameArr,strFirstName));


//(for in), (for each), (for of) we can use const to declare since the object gets
//destroyed in each iteration.
//when we use index for loop i.e for (let index=0; index<arr.length;index++){
//} We have to use let since the value of index gets incremented and we aren't supposed
//to change

//----------------------------------------------------------------


function nameOfFunction(param1,param2){
    return (something);
}


//Name of function is not needed. equalgreaterthanArrow is used. RHS of that arrow 
//performs some operation. LHS of the arrow takes in the input. And LHS of the input stores the value (output).
//calling function using variable name with parameters  variableName(param1,param2) instead of the earlier functionName(param1,param2);
let sum = (param1,param2) => param1+param2;
console.log(sum(1,2));
