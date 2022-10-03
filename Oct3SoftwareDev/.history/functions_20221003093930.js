
function sum(points,bonus){
    return points+bonus;
}
let addedValue = sum(5,1);

function totalScore(){
    let score = 6 * addedValue;
    return score;
}

console.log(totalScore());