// Challenge: Hangman!
// In this file, write a program that will let the user play 
// hangman. The program should work as follows:
// Choose a random word from a list of words.
// In a loop, do the following:
// Ask the user to guess a letter
// If the user guessed a wrong letter, then add one step to 
// the hangman “drawing”
// Display the current completion of the word next to a 
// hangman ASCII "drawing". You can get some inspiration from 
// either here or here
// Keep looping until either the word is found or the hangman
// is hanged!
// Display a message to the user letting them know what 
// happened

var prompt = require('prompt');
var words = ['anthony', 'fabulous', 'pretty', 'amazing', 'super', 'wealthy', 'wonderful', 'awesome', 'spectacular', 'gorgeous']
var randomWord = words[Math.floor(Math.random() * 10)];
var splitWord = randomWord.split('');
var counter = 9;

function hangMan(){
    prompt.get('letter', function(err, result) {
        if (err) {
            console.log('there is an error.');
        }
        else {
            var letter = result.letter;
            if (splitWord.indexOf(letter) > -1) {
                console.log('yes, you got it! that is the right letter!');
            }
            else {
                console.log('no, that is not the right letter.');
            }
            if (counter > 0) {
                counter--;
                hangMan();
            }
            else {
                console.log('sorry...the guess is over!')
            }
        }
    })
}

hangMan();

