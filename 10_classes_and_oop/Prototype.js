// let myName = "hitesh     "
// let mychannel = "chai     "
// Can we add a property trueLength in the prototype of myName to get the actual length of the string ?
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){  // We are adding hitesh function in prototype of Object class. So it can be used by all objects. And also used by every datatype since string, array, function are all objects.
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){  // We are adding hitesh function in prototype of Array class. So it can be used by all arrays. But can not be used by strings or objects because it can not access its parents datatype object.
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()  // hitesh is present in all objects
// myHeros.hitesh()  // hitesh is present in all objects
// myHeros.heyHitesh()  // Hitesh says hello
// heroPower.heyHitesh()  // Error. heroPower is an Object and heyHitesh is a property of Array prototype so it can not be used by its parent class Object.

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){  // Now all strings can use this trueLength property.
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh        ".trueLength()
"iceTea".trueLength()