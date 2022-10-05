const nameArr = ["Steve","Armstrong","Annet","Hessa"];
const strFirstName="Hessa";
function nameOfFunction(nameArr,strFirstName){

    for (const iterator of nameArr) {
        if(strFirstName in nameArr){
            return nameArr[1]
        }
    }
}
nameOfFunction(nameArr,strFirstName);