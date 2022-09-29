function euclidianAlgorithm(num1,num2){
    if(num1==0){
        return num2;
    }
    if(num2==0){
        return num1;
    }
    //(2,4)set of numbers returns value (4,2) for first iteration
    return euclidianAlgorithm(num2,num1%num2);
}

console.log(euclidianAlgorithm(2,4));
console.log(euclidianAlgorithm(3,9));