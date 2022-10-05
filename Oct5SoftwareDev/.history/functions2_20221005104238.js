const nameArr = ["Steve", "Armstrong", "Annet", "Hessa"];
let newNameArr = [];
for (const iterator of nameArr) {
  let strToBeAddedToNewNameArr = iterator.toLowerCase().trim();
  newNameArr.push(strToBeAddedToNewNameArr);
}
console.log("New Name Array is: " + newNameArr);
let strFirstName = " Hessa ";
let strFirstNameLowerCaseAllSpacesTrimmed = strFirstName.toLowerCase().trim();
function nameOfFunction(newNameArr, strFirstNameLowerCaseAllSpacesTrimmed) {
  if (newNameArr.includes()) {
    return newNameArr[1];
  } else {
    return -1;
  }
}
console.log(nameOfFunction(newNameArr, strFirstNameLowerCaseAllSpacesTrimmed));
