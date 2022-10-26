const computer ={
    price:12,
    name:"Dell"
}

console.log(computer.name);
const fileContents= JSON.stringify(computer);
console.log(fileContents);
require('fs').writeFileSync("computer.json",fileContents);
console.log('first', first)