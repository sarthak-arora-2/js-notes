const score = 400  // it is a primitive number type.
// console.log(score);  // 400

const balance = new Number(100)  // it is a wrapper object wrapped around primitive number type.
// console.log(balance);  // [Number: 100]

// So above balance and score gives true for == but false for === because triple equals check for data type too and their datatype is not same.

// console.log(balance.toString().length);  // 3
// console.log(balance.toFixed(1));  // 100.0
// console.log(balance.toFixed(2));  // 100.00
// The toFixed() method returns a string representation of the number, rounded to the specified number of decimal places.


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  // 123.9
// The toPrecision() method returns a string representing the number rounded to the specified number of significant digits. 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  // 4. gives absolute value.
// console.log(Math.round(4.6));  // 5. round up to the nearest integer.
// console.log(Math.ceil(4.2));  // 5. gives ceiling value.
// console.log(Math.floor(4.9));  // 4. gives floor value.
// console.log(Math.min(4, 3, 6, 8));  // 3. gives minimum value.
// console.log(Math.max(4, 3, 6, 8));  // 8. gives maximum value.

console.log(Math.random());  // gives random value between [0,1).
console.log(Math.random()*10)  // gives random float value between [0,10).
console.log((Math.random()*10) + 1);  // gives a floating random value between [1,11).
console.log(Math.floor(Math.random()*10) + 1);  // gives random integer value between [1,10].

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)