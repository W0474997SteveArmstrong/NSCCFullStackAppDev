const nameArr = ["Steve","Annet","Armstrong"];
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

//(for in), (for each), (for of we are 