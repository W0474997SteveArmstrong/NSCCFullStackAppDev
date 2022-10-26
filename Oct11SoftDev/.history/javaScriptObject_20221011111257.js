const computer ={
    price:12,
    name:"Dell"
}

console.log(computer.name);
const str = JSON.stringify(computer);
console.log(str);
require('fs').readFileSync("computer.json",);