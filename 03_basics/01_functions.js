
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

console.log(sayMyName)  // [Function: sayMyName]. Reference of the function.
sayMyName()  // Execution of the function.

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);  // Result:  8


function loginUserMessage(username = "sam"){  // Setting default value as "sam", now username will never be undefined.
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))  // hitesh just logged in
// console.log(loginUserMessage("hitesh"))

// ... is also used as resting in function parameters
// When used in a function definition, the rest parameters (...) allow a function to accept an indefinite number of arguments as an array.

// function sum(...numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(10, 20, 30, 40)); // Output: 100

function calculateCartPrice(val1, val2, ...num1){  // ... this is resting or spreading.
    return num1  // Bcoz of resting last values of the parameters after val1 and val2 will be stored in a list.
}

console.log(calculateCartPrice(200, 400, 500, 2000))  // [ 500, 2000 ]. In this 200 and 400 get stored in val1 and val2. And 500 and 2000 are stored in num1 as list.

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){  // passing object as parameter.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)  // Username is hitesh and price is 199
handleObject({
    username: "sam",
    price: 399
})  // Username is sam and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){  // passing array as parameter.
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));