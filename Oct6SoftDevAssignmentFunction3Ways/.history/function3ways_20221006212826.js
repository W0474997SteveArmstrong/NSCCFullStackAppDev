// Assignment deals with function calls in 3 ways.
//Way1: ArrowFunctions

const nameArr = ["Steve","Annet","Armstrong"];
const strFirstName="Luke";
    //Looping through an array. Arrow Function gets invoked by forEach method.
    console.log("The output using arrow functions:")
    console.log("----------------------------------");
 nameArr.forEach(element => {
        console.log("Hi " +element +"!");
    });
    console.log("-----------------------------------------");
    //end

// Way2: Function Definition

function nameOfAnotherFunction(nameArr){
    console.log("The output using normal function call: ");
    console.log("----------------------------------------");
for (const key in nameArr) {
    if (Object.hasOwnProperty.call(nameArr, key)) {
        const element = nameArr[key];
        console.log("Hi "+element+"!");
    }
}
}
//function gets invoked here
nameOfAnotherFunction(["Dean","Steve","Yigit","Bayo"]);
console.log("---------------------------------------------");
//end


//Way3: function declaration

let prettyPeopleArr = function(array){
    let prettyPeopleInTheArray=[];
    console.log("The output using function declaration: ");
    console.log("---------------------------------------");
    for (const iterator of array) {
        prettyPeopleInTheArray.push(iterator);
    }
    prettyPeopleInTheArray.push('Steve');
    return prettyPeopleInTheArray;
}
console.log(prettyPeopleArr(["Radhika","Anushka"]));
console.log("----------------------------------");



