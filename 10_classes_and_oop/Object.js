
function multipleBy5(num){

    return num*5
}

// Everything in JS is an object. For example below function can store a key value pair as power and 2.
multipleBy5.power = 2

console.log(multipleBy5(5));  // 25.
console.log(multipleBy5.power);  // 2.
console.log(multipleBy5.prototype);  // {}. This contain prototype features but can not see.

function createUser(username, score){
    this.username = username  // this refers to whichever value this function is called upon.
    this.score = score  //  this refers to whichever value this function is called upon.
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)  // new declares that createUser has 2 new prototype properties as increment and printMe,   
const tea = createUser("tea", 250)  // without new createUser does not recognize these new prototype properties.

chai.printMe()

chai.increment()
chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
