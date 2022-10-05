//Alternative way of seeing if something is in an array instead of includes.

const arr=["Steve",2,3]
let finalArr=[];
flag=0;
for (const iterator of arr) {
    if("Stevie" === iterator){
        finalArr.push("Steve");
    }
}
    if (finalArr.length!=0){
        console.log("It's there");
    }
    else{
        console.log(-1);
    }