
/*The goal of Euclids algorithm is to find the number u can use to divide both the given numbers */
function euclidianAlgorithm(num1,num2){
    if(num1==0){
        return num2;
    }
    if(num2==0){
        return num1;
    }
    /*(2,4)set of numbers returns value (4,2) for first iteration and (2,0) for the second iteration.
    Since num2=0 value of num1=2 is returned finally and that value is printed in the console.*/
    return euclidianAlgorithm(num2,num1%num2);
}

console.log(euclidianAlgorithm(2,4));
console.log(euclidianAlgorithm(3,9));