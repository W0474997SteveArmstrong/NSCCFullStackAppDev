// Assignment deals with function calls in 3 ways.
//ArrowFunctions

const nameArr = ["Steve","Annet","Armstrong"];
const strFirstName="Luke";
    //Looping through an array. Arrow Function gets invoked by forEach method.
 nameArr.forEach(element => {
        console.log("Hi " +element +"!");
    });
    //end

// Function Definition

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



let numberOfPrettyPeopleInTheArray = function(array){
    console.log("Hello beautiful! "+array[0]);
    console.log("Hey "+param2+"! You're beautiful too!");
    let prettyPeopleArr = [].push(param1,param2);
    return prettyPeopleArr;
}
console.log(numberOfPrettyPeopleInTheArray["Radhika","Anushka"]);


