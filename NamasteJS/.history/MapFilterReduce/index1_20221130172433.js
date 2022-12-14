const arr=[1,2,3,4,5];
let output=[];

const double = function(x){
    return x*2;
}

output = output.push(arr.map(double))
console.log(output);
// console.log(output.push(arr.map(double)));