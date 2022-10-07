// Assignment deals with function calls in 3 ways.
//Way1: ArrowFunctions

const nameArr = ["Steve","Annet","Armstrong"];
const strFirstName="Luke";
    //Looping through an array. Arrow Function gets invoked by forEach method.
 nameArr.forEach(element => {
        console.log("Hi " +element +"!");
    });
    //end

// Way2: Function Definition

function nameOfAnotherFunction(nameArr){
for (const key in nameArr) {
    if (Object.hasOwnProperty.call(nameArr, key)) {
        const element = nameArr[key];
        console.log("Hi "+element+"!");
    }
}
}
//function gets invoked here
nameOfAnotherFunction(["Dean","Steve","Yigit","Bayo"]);
//end


//Way3: function declaration

let prettyPeopleInTheArray = function(array){
    for (const iterator of array) {
        let prettyPeopleInTheArray = [];
        prettyPeopleInTheArray.push(iterator);
    }
    return prettyPeopleInTheArray;
}
console.log(prettyPeopleInTheArray(["Radhika","Anushka"]));


