const nameArr = ["Steve","Annet","Armstrong"];
function nameOfFunction(nameArr){

    //Looping through an array
 nameArr.forEach(element => {
        console.log("Hi " +element +"!");
    });

}
//Looping alternate way.
for (let index = 0; index < nameArr.length; index++) {
    const element = nameArr[index];
    console.log("Hi "+element+"!");
}

for (const key in nameArr) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
nameOfFunction(nameArr);