const nameArr = ["Steve","Armstrong","Annet","Hessa"];
let strFirstName="Hessa";
let strFirstNameLowerCaseSpacesTrimmed = strFirstName.toLowerCase().;
console.log(strFirstNameLowerCase);
function nameOfFunction(nameArr,strFirstName){

    for (const iterator of nameArr) {
        if(strFirstName in nameArr){
            return nameArr[1];
        }
        else{
            return -1;
        }
    }
}
nameOfFunction(nameArr,strFirstName);