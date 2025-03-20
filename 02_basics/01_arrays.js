// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // Adds 9 at the 0th index of myArr.
// myArr.shift()  // Removes element at 0th index.

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // Coverts array into a string in which elements are separated by comma.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // Copy a slice of the array form the original array.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // Cuts a slice of the array from the original array.
console.log("C ", myArr);
console.log(myn2);