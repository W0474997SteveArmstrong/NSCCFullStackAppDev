const numbers=[3,22,1,12,-1,-2];
//construct a new array based on the filter u specify as a criteria

const evenNumbers = numbers.filter(x=>x%2==0);
console.log(evenNumbers);

const evenPositiveNumbers = numbers.filter(x=>x%2==0 && x>0);
console.log(evenPositiveNumbers);

const names=['Dean','Fleur','Xi','DEAN'];

console.log(names.includes('Xi'));

//All names with a as the third letter


const filterNames = names.filter(x=>x[2]=='a');
console.log(filterNames);

names.forEach

const filteredNames = names.forEach(element => 
   element[2]=='a'
);

console.log("filteredNames is",filteredNames);

