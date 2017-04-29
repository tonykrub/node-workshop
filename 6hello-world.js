// 1) First program
// Create a file called hello-world.js . In it, write a simple 
// node program that outputs "Hello World!" to the console.
// Add an instruction to your program that will output "Hello 
// World Again!!" 10 seconds after the program was run.
// Save, commit and push.
//below is the answer
// setTimeout(function(){
//     console.log("Hello World");
//     },10000);
    

// 2) A wild interval has appeared!
// If you never tried setInterval, give it a try first. It 
// works the same way as setTimeout, takes a callback function
// and a time in milliseconds. But instead of calling your 
// callback once, it calls it once every x milliseconds. In 
// this exercise, you’ll have to mimic what setInterval is 
// doing but only with setTimeout!
// Your exercise: Write a piece of code using setTimeout that 
// prints “Hello World!” every 10 seconds forever.
// One idea that may come to you is to do something like this:
// setTimeout(function() {
//   console.log('Hello World!');
//   setTimeout(function() {
//     console.log('Hello World!');
//     // when does this stop??
//   }, 1000);
// }, 1000);
// This won’t work, because you’d have to write an infinite 
// amount of code.
// Another idea you might have is to do the following:
// while (true) {
//   setTimeout(function() {
//     console.log('Hello World!');
//   }, 1000);
// }
// Up to you to figure out why this does not work ;) Ask us 
// if you can’t figure it out. Then, find a real solution.
// Two BIG hints: the solution involves recursion. You will 
// have to write a function.    

// function callAgain() {
//     while(true) {
//         setTimeout(function() {
//             console.log('Hello World!');
//         },1000);
//     };
//     callAgain();
// }
// callAgain();
function again() {
    return setTimeout(function() {
        console.log('Hello World!');
        again()
    },1000);
}
again();
      
    
    