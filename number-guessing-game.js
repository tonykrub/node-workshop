/* 5)Number guessing game!
Create a file called number-guessing-game.js.
In this file, re-write your number guessing game (from the basic javascript workshop) for the 
command line!
Instead of using prompt and alert, you will have to use capabilities from NodeJS and any 
external module. HINT: there is an npm library called prompt that can help you with that :)
Save/commit/push
*/
var prompt = require("prompt");
var randomNumber = Math.floor(Math.random() * 100);
var counter = 3;
function guessingNumber(number) {
    prompt.get('Hi..Please guess a number', function(err, result) {
        if (err) {
            console.log("There is an error.");
        }
        else if (result.guess === randomNumber) {     // why is it result.guess?
            console.log("Good job! You are right!");
        }
        else if (result.guess > randomNumber) {
            console.log("Your number is too high!");
        }
        else {
            console.log("Your number is too low!");
        }
        if (counter > 0) {
            counter --;
            guessingNumber();
            }
        else {
            console.log("The guess is over!");
        }
    });
}
guessingNumber();
        