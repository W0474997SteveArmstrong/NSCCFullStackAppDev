const arr =[1,3,2,1.5,-6];
const strArr = ["Steve","steve","STEVE"];

// const sortedArr = arr.sort();

// console.log("SortedArray is: "+sortedArr);
arr.sort(); //returns [-6,1,1.5,2,3]
strArr.sort(); // returns STEVE,Steve,steve

console.log("OriginalArray is: "+arr);
console.log("OriginalStringArray is: "+strArr);