const arr=["Steve",2,3]
const finalArr=[];
flag=0;
for (const iterator of arr) {
    if("Steve" === iterator){
        finalArr.push()
    }
    else{
        console.log("Else it isn't there");
        flag=2;
    }
}
    if (flag==1){
        console.log("It's there");
    }
    else if(flag==2){
        console.log("It's not there");
    }
    else{
        return -1;
    }