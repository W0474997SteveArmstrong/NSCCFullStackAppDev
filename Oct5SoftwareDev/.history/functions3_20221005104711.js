

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