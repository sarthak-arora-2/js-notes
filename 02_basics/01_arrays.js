// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const temp = new Array(5)  // defines an array of 5 size.
const myArr2 = new Array(1, 2, 3, 4)  
console.log(myArr2);  // [ 1, 2, 3, 4 ]
console.log(temp)  // [ <5 empty items> ]

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // Adds 9 at the 0th index of myArr.
// myArr.shift()  // Removes element at 0th index.

// console.log(myArr.includes(9));  // false
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  // Converts array into a string in which elements are separated by comma.

// console.log(myArr);
console.log( newArr);  // 0,1,2,3,4,5.


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // Copy a slice of the array from the original array. Does not include the upper bound.

console.log(myn1);  // [ 1, 2 ]
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // Cuts a slice of the array from the original array. Includes the upper bound.
console.log("C ", myArr);  // C  [ 0, 4, 5 ]
console.log(myn2);  // [ 1, 2, 3 ]