const arr=["Steve",2,3]
let finalArr=[];
flag=0;
for (const iterator of arr) {
    if("Steve" === iterator){
        finalArr.push("Steve");
    }
}
    if (finalArr.length!=0){
        console.log("It's not there");
    }
    else{
        console.log(-1);
    }