//Better and fewer lines of code

const radius=[1,2,3,4,5];

const area = function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map())
