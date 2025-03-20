const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values: Values that are false.

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values: Values that are true. Any value that is not falsy is truthy.
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {  // To check if an array is empty or not.
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {  // To check if an object is empty or not.
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// It is used to accept the actual value and not any null or undefined value.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")