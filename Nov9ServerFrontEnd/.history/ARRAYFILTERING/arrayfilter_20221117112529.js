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

// const filteredOutName= names.forEach(element[2]=='a');
// console.log('filteredOutNAME',filteredOutName);

// const filteredNames = names.forEach(element => 
//    element[2]=='a'
// );

// console.log("filteredNames is",filteredNames);


const namesLongerThan4Chars = names.filter(element=>element.length>4);
console.log(namesLongerThan4Chars);


const people =[{name:"Dean",age:51},{name:"Fluer",age:28}];

const peopleOver50 = people.filter(x=>x.age>50);
console.log(peopleOver50);


const peopleUnder100with_e_inName = people.filter(x=>x.age<100);
console.log(peopleUnder100with_e_inName);