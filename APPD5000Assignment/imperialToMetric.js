const rls = require('readline-sync');
const noOfTons = parseInt(rls.question("Please enter the number of tons: "));
const noOfStone = parseInt(rls.question("Please enter the number of stone: "));
const noOfPounds = parseInt(rls.question("Please enter the number of pounds: "));
const noOfOunces = parseInt(rls.question("Please enter the number of ounces: "));
const totalOunces = 35840 * noOfTons +224 * noOfStone +16 * noOfPounds + noOfOunces;
const totalKilos = totalOunces/35.274; 
const metricTons = parseInt(totalKilos/1000); 
const justKilos = (totalKilos-(metricTons * 1000));
const justKilosParsedInt = parseInt(totalKilos-(metricTons * 1000));
const justGrams = ((justKilos-justKilosParsedInt)*1000).toFixed(1);

console.log("Imperial to Metric Conversion");
console.log(" ");
console.log("Enter the number of tons:",noOfTons);
console.log("Enter the number of stone:",noOfStone);
console.log("Enter the number of pounds:",noOfPounds);
console.log("Enter the number of ounces:",noOfOunces);
console.log(" ");
console.log("The metric weight is",metricTons,"metric tons,",justKilosParsedInt,"kilos,", "and",justGrams,"grams.");