// Objects can be created using 2 ways:
// 1. Object Literals   2. Using Constructors. Using Constructor we get singleton object. e.g. Object.Create

// singleton
// Object.create

// object literals

const mySym = Symbol("key1") // Symbol is a primitive datatype. It also has a unique reference ID.


const JsUser = {
    name: "Hitesh",  // name is stored in JS as "name" in the backend. So when we access name using [](brackets) we need to use ""(quotes). e.g. JsUser["name"]
    "full name": "Hitesh Choudhary",  // Now this can't be accessed using . notation bcoz key is stored as string.
    [mySym]: "mykey1",  // The only correct way to store a symbol inside an object.
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // After using this JsUser objects gets freezed and can not be modified later.
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // 'this' is used to access the object on which function call is done.
}

// JsUser.greeting()
console.log(JsUser.greeting())  // console.log give undefined because JsUser.greeting() is not returning anything.
// JsUser.greetingTwo()
console.log(JsUser.greetingTwo())  // console.log give undefined because JsUser.greeting() is not returning anything.