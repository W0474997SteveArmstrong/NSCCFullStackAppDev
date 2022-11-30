
const radius =[1,2,3,4,5];

const area = function (radius){
    return Math.PI * radius * radius
}

const circumference = function (radius){
    return 2 * Math.PI * radius;
}
const calculate = function (radius,logic){
    let output =[];
    for(i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log('Area is',calculate(radius,area));
console.log(calculate(radius,circumference));