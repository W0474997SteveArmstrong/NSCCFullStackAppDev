const arr=["Steve",2,3]
let finalArr=[];
flag=0;
for (const iterator of arr) {
    if("Steve" === iterator){
        finalArr.push("Steve");
    }
}
    if (finalArr.length()){
        console.log("It's there");
    }
    else{
        console.log(-1);
    }