function removeDuplicates(arr){

    const arrResult = [];

    for (const iterator of arr) {
        if(arrResult.includes(iterator)){
            console.log(iterator,"is already in result array.")
        }
        else{
            arrResult.push(iterator);
        }
    }
    return(arrResult);
}

console.log(removeDuplicates([1,1,1,2,4,6,8,8,9]));