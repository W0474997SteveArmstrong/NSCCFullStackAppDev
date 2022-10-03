
function mystery(str){

    const arr= str.split("");
    //Reverses the string arr.reverse()---> reverses the array
    // .join()-----> converts array to string.
    return(arr.reverse().join(""));
}
let mystValue = mystery(`Stev!ie`);
console.log(mystValue);