const arr=["Steve",2,3]
flag=0;
for (const iterator of arr) {
    if("Steve" === iterator){
        flag=1;
    }
    else{
        console.log("Else it isn't there");
    }
}
    if (flag==1){
        console.log("It's there");
    }
    else if(flag==2){
        console.log("It's not there");
    }