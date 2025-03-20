// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==
// === comparison operator compare two things: value and its datatype

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);  // Error. Because power is not defined in the global scope.


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  // We can check condition without a scope if we have only one expression for the condition. Expression should be ended by a ;. But using comma like this is a bad code writing practice. So abvoid it.

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {  // AND conditional operator.
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {  // OR conditional operator.
    console.log("User logged in");
}