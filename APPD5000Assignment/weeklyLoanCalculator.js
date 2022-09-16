const rls = require('readline-sync');
const loanAmt = Number(rls.question("Please enter the amount of money you had taken as a loan: "));
const ratePct = Number(rls.question("Please enter the rate percent of Interest for your loan: "));
const noOfYears = Number(rls.question("Please enter the duration of loan repayment: "));
const numerator = ratePct/5200;
const denominator = (1-(1+numerator)**(-52*noOfYears));  
const weeklyPymnt = (numerator/denominator)*loanAmt;

console.log(`Weekly Loan Calculator`);
console.log(" ");
console.log("Enter the amount of loan:",loanAmt);
console.log("Enter the interest rate (%):",ratePct);
console.log("Enter the number of years:",noOfYears);
console.log(" ");
console.log("Your weekly payment will be:",weeklyPymnt.toFixed(2));