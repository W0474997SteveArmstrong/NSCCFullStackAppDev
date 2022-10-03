
function mystery(str){

    const arr= str.split("");
    //Reverses the string
    return(arr.reverse().join(""));
}
let mystValue = mystery(`Stev!ie`);
console.log(mystValue);