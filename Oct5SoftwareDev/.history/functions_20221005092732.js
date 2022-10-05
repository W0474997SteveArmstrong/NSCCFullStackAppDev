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

    nameArr.p
}
nameOfAnotherFunction(nameArr,strFirstName);


//(for in), (for each), (for of) we can use const to declare since the object gets
//destroyed in each iteration.
//when we use index for loop i.e for (let index=0; index<arr.length;index++){
//} We have to use let since the value of index gets incremented and we aren't supposed
//to change
