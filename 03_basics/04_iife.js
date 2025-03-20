// Immediately Invoked Function Expressions (IIFE)
// A JavaScript function that executes immediately after being defined.
// Reason of use: To Avoid Polluting the Global Scope
// Variables declared inside an IIFE do not leak into the global scope, which helps avoid naming conflicts.
// (function() {
//     let message = "Hello"; // Local variable (not in global scope)
//     console.log(message);
// })();
// console.log(typeof message); // "undefined"


// Syntax: ()();  First parenthesis is for function definition, either arrow function or named function can be defined. And second parenthesis is for trhe function call.
// ; is used to end any expression. If we want to run an iife then the expression just before that iife should be ended by a delimiter(;). As it separates the iife from the preceding expression.
// JavaScript does not always insert semicolons automatically where you expect them. If a statement before an IIFE does not explicitly end with ;, JavaScript may interpret the IIFE as a continuation of the previous statement, causing errors.



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})()

const a = 10
console.log(a);  // Preceding expression of an iife, ended with a semicolon.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')  // iife with an argument.