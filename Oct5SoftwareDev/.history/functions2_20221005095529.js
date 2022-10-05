const nameArr = ["Steve","Armstrong","Annet","Hessa"];
let newNameArr=[];
for (const iterator of nameArr) {
    let strToBeAddedToNewNameArr = iterator.toLowerCase().trim();
    newNameArr.push(strToBeAddedToNewNameArr);
}
console.log("New Name Array is: "+ newNameArr);
let strFirstName=" Hessa ";
let strFirstNameLowerCaseAllSpacesTrimmed = strFirstName.toLowerCase().trim();
function nameOfFunction(nameArr,strFirstName){

    for (const iterator of newnameArr) {
        if(strFirstNameLowerCaseAllSpacesTrimmed in nameArr){
            return nameArr[1];
        }
        else{
            return -1;
        }
    }
}
nameOfFunction(nameArr,strFirstName);