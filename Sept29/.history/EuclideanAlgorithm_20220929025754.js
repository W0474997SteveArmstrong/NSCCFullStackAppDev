function euclidianAlgorithm(num1,num2){
    if(num1==0){
        return num2;
    }
    if(num2==0){
        return num1;
    }
    //returns value (4,0) for first two numbers and 
    return euclidianAlgorithm(num2,num1%num2);
}

console.log(euclidianAlgorithm(2,4));
console.log(euclidianAlgorithm(3,9));