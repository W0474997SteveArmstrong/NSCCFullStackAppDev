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



let resultArr = function(param1,param2){
    console.log("Hello beautiful! "+param1);
    console.log("Hey "+param2+"")
}


