const arr=["Steve",2,3]
let finalArr=[];
flag=0;
for (const iterator of arr) {
    if("Stevie" === iterator){
        finalArr.push("Steve");
    }
}
    if (null!=finalArr){
        console.log("It's there");
    }
    else{
        return -1;
    }