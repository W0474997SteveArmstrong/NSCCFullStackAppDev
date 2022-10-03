
function sum(points,bonus){
    return points+bonus;
}
sum(5,1);

function totalScore(){
    let score = 6 * sum();
    return score;
}

console.log(totalScore());