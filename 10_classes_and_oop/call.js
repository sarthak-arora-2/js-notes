function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername.call(username) 
    // We can send this as the first argument of a call method. 
    SetUsername.call(this, username)  // To get the reference of username defined in setUsername execution context even after it gets out of
    // the stack, we send our this as an argument as a reference.
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")  // createUser { email: 'chai@fb.com', password: '123' }. Username is not getting added because 
// username is defined in SetUsername execution context and when this function gets executed and goes out of execution stack, it takes all 
// its reference values and variables too.
console.log(chai);