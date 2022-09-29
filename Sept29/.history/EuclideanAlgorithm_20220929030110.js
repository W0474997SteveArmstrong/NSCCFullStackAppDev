function euclidianAlgorithm(num1,num2){
    if(num1==0){
        return num2;
    }
    if(num2==0){
        return num1;
    }
    //(2,4) returns value (4,2) for first two numbers and value (9,0) for second two numbers
    return euclidianAlgorithm(num2,num1%num2);
}

console.log(euclidianAlgorithm(2,4));
console.log(euclidianAlgorithm(3,9));