const arr=[1,2,3,4,5];

const double = function(x){
    return x*2;
}

console.log((arr.map(double)));

console.log(arr.map((x)=>x.toString(2)));



arr.map((x)=>{return x.toString(2)})



const binary = function (x){
    return x.toString(2);
}

console.log(arr.map(binary);)
