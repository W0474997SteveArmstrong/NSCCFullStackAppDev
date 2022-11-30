// Better code 

const radius =[1,2,3,4,5];

const area = function (radius){
    return Math.PI * radius * radius
}

const circumference = function (radius){
    return 2 * Math.PI * radius;
}

const diameter = function (radius){
    return 2*radius;
}
Array.prototype.calculate = function (logic){
    let output =[];
    for(i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }
    return output;
};

console.log('Area is',radius.calculate(area));
console.log('Circumference is',calculate(circumference));
console.log('Diameter is',calculate(diameter));