const promiseOne = new Promise(function(resolve, reject){  // new Promise object is created.
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()  // resolve() is connected to then().
    }, 1000)
})

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){  // then() is directly connected to resolve() without any variable.
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})  // Object is sent to then() using resolve().
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);  // prints the object sent by resolve().
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


// This below is promise chaining. then(), catch(), finally() are chained.
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username  // user.username is sent to the next then().
}).then((username) => {
    console.log(username);
}).catch(function(error){  // catch() is directly connected to reject() and is used for handling errors.
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // finally() will always execute no matter what.



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// The async function declaration creates a binding of a new async function to a given name. 
// The await keyword is permitted within the function body, enabling asynchronous, 
// promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains.

async function consumePromiseFive(){  // async function is used instead of then() and catch().
    try {
        const response = await promiseFive  // await takes the response from resolve.
        console.log(response);  // { username: 'javascript', password: '123' }. 
    } catch (error) {  // error catches reject parameter.
        console.log(error);  // ERROR: JS went wrong.
    }
}

consumePromiseFive()  // Calling the async function.

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. 
// You can then check the request status and extract the body of the response in various formats, 
// including text and JSON, by calling the appropriate method on the response.

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {  // response contain a string of object.
    return response.json()  // converts string to json.
})
.then((data) => {
    console.log(data);  // prints the object.
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
// with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // Expected output: Array [3, 42, "foo"]
