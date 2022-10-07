let prettyPeopleArr = function(array){
    let prettyPeopleInTheArray=[];
    for (const iterator of array) {
        prettyPeopleInTheArray.push(iterator);
    }
    prettyPeopleInTheArray.push('Steve');
    return prettyPeopleInTheArray;
}
console.log(prettyPeopleArr(["Radhika","Anushka"]));