const rls= require('readline-sync');
let num1=null;
let num2=null;
while(null=num1 || 0==num1){
num1 = rls.question("Please enter a number in the range 9");
}
while(null==num2 || 0==num2){
    num2 = rls.question("Please enter another number in the range 1-9")
}
