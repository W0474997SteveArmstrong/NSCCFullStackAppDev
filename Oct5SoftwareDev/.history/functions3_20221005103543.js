const arr=["Steve",2,3]
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
for(let i in arr){
if("Steve"=== i){
    console.log("It's there.");
}
else{
    console.log("Else it isn't there");
}
}