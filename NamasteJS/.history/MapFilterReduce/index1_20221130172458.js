const arr=[1,2,3,4,5];
const output=[];

const double = function(x){
    return x*2;
}

output = output.push(arr.map(double))
console.log((arr.map(double)));