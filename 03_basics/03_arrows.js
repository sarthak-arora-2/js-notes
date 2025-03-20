const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this is used to access current context.
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // {}. This will give an empty object because this page does not contain anything. Bit on any website inspection->console, it will show many things.

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  // undefined. Because maybe this can not be used inside a function. this can be used if it is used inside Object.myFunc().
// }

// chai()  // undefined. In regular function this will refer to the global scope or window.

//  Below chai function is a regular function (not an arrow function), and this in a regular function depends on how it is called. In this function this will refer to the global scope.

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// } 

// chai()  // undefined. In regular function this will refer to the global scope or window. And in the global scope there is no variable username.


// ARROW FUNCTION: IT IS JUST A MODERN DECLARATION OF FUNCTION. () => {}
// Arrow functions do not have their own this. Instead, they inherit this from their surrounding lexical scope (the scope where they were defined).
const chai = () => {
    let username = "hitesh"
    console.log(this.username);
}

chai()  // undefined. Arrow functions do not have their own this. They take this from the surrounding lexical scope. Since the global object does not have a username property, undefined is logged.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // We can declare a function like this without 'return' if we have only a 'return' expression.

// const addTwo = (num1, num2) => ( num1 + num2 )  // It is a good practice to write return expression inside parenthesis.

// const addTwo = (num1, num2) => ({username: "hitesh"})  // Only if we write return expression inside this parenthesis this function will run otherwise it will take braces as the scope of the function.


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// MyName() => {  // Incorrect. Arrow functions should be assigned to a variable or used directly in expressions.

// }

const MyName = () =>  console.log("Hello!")
MyName()  // Hello. Correct way.

const obj = {
    sayHi: () => console.log("Hi!")  // Arrow function used directly in expression.
};
obj.sayHi(); // Output: Hi!
