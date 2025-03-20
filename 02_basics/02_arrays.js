const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  // Pushes dc_heros array as the 4th element of marvel_heros.
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // Concatenates both array and returns a new array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // Spreading : ... this spreads the array into a new array containing single elements.

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // flats the sub-arrays into a single array. Instead of Infinity we can assign the depth of the flattening of sub-arrays.
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))  // Checks the given argument is an array or not.
console.log(Array.from("Hitesh"))  // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

Array.of(7); // [7]
Array(7); // array of 7 empty slots. For single argument it creates an array of that size.

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]