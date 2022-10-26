const numArr = [1,2,3,4,2,2,1];

function removeDups(arr){

    for(let i=0;i<numArr.length;i++){
        console.log(numArr[i]);
        for(let j=i+1;j<arr.length;j++){
            console.log(arr[j]);
            if(arr[i]=== arr[j])
        }
    }
}
removeDups(numArr);