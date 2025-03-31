class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  // It is same as SetUsername.call(this, username), with super we don't have to sent this and super use the parent class.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")  // child class Teacher is called and username chai is saved using parent User class.

chai.logMe()  // USERNAME is chai
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);  // true
console.log(chai instanceof Teacher);  // true
console.log(masalaChai instanceof User);  // true
console.log(masalaChai instanceof Teacher);  // false


// Instance of a child is an instance of its parent too.
// But instance of a parent is not an instance of its child.