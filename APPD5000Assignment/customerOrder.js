const rls = require('readline-sync');
const customerName = rls.question("Please enter the customer's name: ");
const delivDistinKms = rls.question("Please enter the distance in Kilometres for delivery: ");
const delivRateIn$PerKm = 15;
const delivCost = Number(delivDistinKms * delivRateIn$PerKm);
const costOfRecordsBoughtStr = rls.question("Please enter the cost of records purchased: ");
const costOfRecordsBought = Number(costOfRecordsBoughtStr);
const salesTaxRatePct = 14/100;
const purchaseCost = costOfRecordsBought + costOfRecordsBought * salesTaxRatePct;
const totalCost = purchaseCost + delivCost;
console.log("Hipster's Local Vinyl Records - Customer Order Details");
console.log(" ");
console.log("Enter the customer's name:",customerName);
console.log("Enter the distance in kilometres for delivery:",delivDistinKms);
console.log("Enter the cost of cost of records purchased:",costOfRecordsBought);
console.log(" ");
console.log("Purchase summary for",customerName);
console.log("Delivery Cost:","$"+delivCost.toFixed(2));
console.log("Purchase Cost:","$"+purchaseCost.toFixed(2));
console.log("Total Cost   :","$"+totalCost.toFixed(2));