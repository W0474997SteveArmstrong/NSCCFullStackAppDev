//Better and fewer lines of code using map

const radius=[1,2,3,4,5];

const area = function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius;
}

const diameter = function(radius){
    return 2*radius;
}

console.log("The area is",radius.map(area));
console.log("The circumference is",radius.map(circumference));
console.log("The diameter is",radius.map(diameter))
