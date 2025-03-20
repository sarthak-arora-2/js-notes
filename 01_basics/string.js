const firstName = "Sarthak"
const lastName = "Arora"
console.log(firstName + " " + lastName + " 7")
console.log(`Hello my name is ${firstName}`)

const gameName = new String("Sarthak-Arora") // This gives an object containing key value pairs having index at keys and characters at values. It also stores length of the string as a key value pair.

// String {'Sarthak-Arora'}
// 0: "S"
// 1: "a"
// 2: "r"
// 3: "t"
// 4: "h"
// 5: "a"
// 6: "k"
// 7: "-"
// 8: "A"
// 9: "r"
// 10: "o"
// 11: "r"
// 12: "a"
// length: 13

console.log(gameName)
console.log(gameName[0])

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-12, 4)  // Can give negative value index.
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
