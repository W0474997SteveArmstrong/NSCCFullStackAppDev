let points=6;
let bonus=5;
let totalpoints=6
function sum(points,bonus){
    return points+bonus;
}
let addedValue = sum(6*5,1);

function totalScore(){
    let score = 6 * addedValue;
    return score;
}

console.log(totalScore());