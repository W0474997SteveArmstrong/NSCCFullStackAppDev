const rls = require('readline-sync');

console.log('****************************')
console.log('Welcome to the Guessing Game')
console.log('****************************')


const MAX_GUESSES = 3;
const SECRET_NUMBER = Math.floor(Math.random()*10+1);
let currentGuessNum = 1;


while(currentGuessNum <= MAX_GUESSES)
{
    const currentGuess = rls.question("What is your next guess?");
    currentGuessNum = currentGuessNum + 1;
    if(currentGuess == SECRET_NUMBER)
    {
        console.log("Congrats! You guessed the secret number!");
        break;
    }
    else if(currentGuess < SECRET_NUMBER)
    {
        console.log("Sorry, that's not it. Too low!");
        continue;
    }
    else if(currentGuess > SECRET_NUMBER)
    {
        console.log("Sorry, that's not it. Too high!");
    }
}

console.log("Game Over");
