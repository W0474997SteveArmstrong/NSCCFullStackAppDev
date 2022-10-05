const arr=["Steve",2,3]
let finalArr=null;
flag=0;
for (const iterator of arr) {
    if("Steve" === iterator){
        finalArr.push("Steve");
    }
}
    if (null!=finalArr){
        console.log("It's there");
    }
    else{
        console.log(-1);
    }