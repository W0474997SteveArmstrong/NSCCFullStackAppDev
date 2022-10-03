
function sum(points,bonus){
    return points+bonus;
}
sum(5,1);

function totalScore(points,bonus){
    let score = 6 * points+bonus;
    return score;
}

console.log(totalScore(5,1));