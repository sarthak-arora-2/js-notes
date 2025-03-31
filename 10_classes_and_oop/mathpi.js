const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    // enumerable: false, Now we can not iterate over name property of this object. And only price and isAvailable key value pair will be printed in the for loop.
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {  // When value is not a function print key value pair.
        
        console.log(`${key} : ${value}`);
    }
}