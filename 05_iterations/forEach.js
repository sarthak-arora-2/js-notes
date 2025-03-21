// The forEach() method of Array instances executes a provided function once for each array element.

// const array1 = ["a", "b", "c"];

// array1.forEach((element) => console.log(element));  // We have to give a callback function in forEach loop.

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // In this we have to give just the reference of the named function and not execute it.

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

coding.forEach((item, index, arr) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {  // item stores each object.
    
    console.log(item.languageName);
} )