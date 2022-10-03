let points=6;
let bonus=5;
let totalpoints=6*points;
function sum(points,bonus){
    return points+bonus;
}
let addedValue = sum(totalpoints,bonus);

function totalScore(){
    let score = 6 * addedValue;
    return score;
}

console.log(totalScore());