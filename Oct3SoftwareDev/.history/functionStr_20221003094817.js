
function mystery(str){

    const arr= str.split("");
    return(arr.reverse().join(""));
}
let mystValue = mystery(`Stev!ie`);
//Reverses the string
console.log(mystValue);