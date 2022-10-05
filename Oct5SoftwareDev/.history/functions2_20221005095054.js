const nameArr = ["Steve","Armstrong","Annet","Hessa"];
for (const iterator of nameArr) {
    iterator.toLowerCase().trim()
}
let strFirstName=" Hessa ";
let strFirstNameLowerCaseAllSpacesTrimmed = strFirstName.toLowerCase().trim();
function nameOfFunction(nameArr,strFirstName){

    for (const iterator of nameArr) {
        if(strFirstNameLowerCaseAllSpacesTrimmed in nameArr){
            return nameArr[1];
        }
        else{
            return -1;
        }
    }
}
nameOfFunction(nameArr,strFirstName);