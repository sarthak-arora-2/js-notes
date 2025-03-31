class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // The reason for using _email and _password is to create internal or private-like variables within the class. 
    // This is a common practice in object-oriented programming to distinguish between 
    // the actual data stored internally in the object (like _email and _password) and 
    // the public properties or methods (like email and password) that are used to get or set those values.

    get email(){  // used to get values.
        return this._email.toUpperCase()  // setting value of email explicitly.
    }
    set email(value){  // used to set values.
        this._email = value  // underscore is used to declare variables as private-like.
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);