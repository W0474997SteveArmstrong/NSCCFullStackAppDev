const rls = require('readline-sync');
let question1 = null;
// while(("Dean"!=question1) || (null==question1)){
//     question1 = rls.question("Hi there! Please key in your name: ");
// }
// console.log("Hello Dean");

do{
    question1 = rls.question("Hi there! Please key in your name: ");
}
while("Dean"!=question1);
console.log("Hello Dean");

