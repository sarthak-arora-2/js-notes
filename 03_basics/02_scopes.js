//  Anything inside this {} gets into a scope whether its for if or for any function. But not for an object.


//var c = 300  // Creating variables using var are global scope variables. If they are updated inside a local scope the variable in the global scope gets updated too.
let a = 300
if (true) {
    let a = 10 
    const b = 20 
    // console.log("INNER: ", a);
    var c = 30   
}



// console.log(a);  // Will throw error because a is not defined outside scope.
// console.log(b);  // Will throw error because b is not defined outside scope.
// console.log(c);  // 30. Because var declares variable as global scope even if they are inside any local scope.


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);  // Parent scope variable can be used by child scope.
    }
    // console.log(website);  // Will throw error because website is in its child scope. Child scope variables can't be used by parent scope.

     two()

}

// two() // Can not be used because it is not in scope.
// one() // Can be used because in scope.

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  // Can not use.
}

// console.log(username);  // Can not use.


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  // Can be called even if called before function declaration.

function addone(num){
    return num + 1
}



// addTwo(5)  // Can not be called before function declaration! because function is getting stored in a variable and variable is being defined after calling of the function.

// const addTwo = function(num){
//     return num + 2
// }

// addTwo(5)  // This will run correctly because it is called after function variable declaration.