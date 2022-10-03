
function mystery(str){

    const arr= str.split("");
    //Reverses the string arr.reverse()---> reverses the array
    
    return(arr.reverse().join(""));
}
let mystValue = mystery(`Stev!ie`);
console.log(mystValue);