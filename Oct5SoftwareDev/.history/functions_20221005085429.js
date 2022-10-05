const nameArr = ["Steve","Annet","Armstrong"];
function nameOfFunction(nameArr){

    //Looping through an array
 nameArr.forEach(element => {
        console.log("Hi " +element +"!");
    });

}
//
for (let index = 0; index < nameArr.length; index++) {
    const element = nameArr[index];
    console.log("Hi "+element+"!");
}
nameOfFunction(nameArr);