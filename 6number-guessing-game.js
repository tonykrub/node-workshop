// Number guessing game!
// Create a file called number-guessing-game.js.
// In this file, re-write your number guessing game (from the 
// basic javascript workshop) for the command line!
// Instead of using prompt and alert, you will have to use 
// capabilities from NodeJS and any external module. HINT: there
// is an npm library called prompt that can help you with that :)

var prompt = require('prompt');
var counter = 5;
var randomNum = Math.floor(Math.random() * 100);

function guessNum(num) {
    prompt.get('number', function (err, result) {
      //  console.log(result);
      // console.log(typeof result);
        if (err) {
            console.log('there is an error.')
        }
        else {
            var num = result.number;
            if (num < randomNum ) {
                console.log('your number is too low!')
            }
            else if (num > randomNum) {
                console.log('your number is too high')
            }
            else {
                console.log('Congratulations! you got the right number!')
            }
            if (counter > 0) {
                counter--;
                guessNum();
            }
        }
    })
}

guessNum();