// const tinderUser = new Object()

// console.log(tinderUser);  // {}

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj5 = {5: "c", 6: "d"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// Object.assign(target, source)
const obj3 = Object.assign({}, obj1, obj2, obj4)  // The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const obj6 = Object.assign({}, obj1, obj2, obj4, obj5)  // obj5 updates props of obj4 as they have same props.
console.log(obj6)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }


const obj7 = {...obj1, ...obj2}
console.log(obj7);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);  // { id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser));  // [ 'id', 'name', 'isLoggedIn' ]. Returns a list of keys.
// console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]. Returns a list of values.
// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true

// Destructuring of objects.
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // We have to use this whenever we want to access courseInstructor. 
// So instead of using course.courseInstructor, we will assign new name to courseInstructor.
const {courseInstructor: instructor} = course  // Renaming courseInstructor to Instructor of course object.

console.log(course.courseInstructor);  // hitesh
console.log(instructor);  // hitesh
console.log(course)  // { coursename: 'js in hindi', price: '999', courseInstructor: 'hitesh' }


// Below is the json format which is used for API calls.
// {
//     "name": "hitesh", // In json keys are also stored as strings.
//     "coursename": "js in hindi",
//     "price": "free"
// }


// An API call can also contain a list of json's.
// [
//     {},
//     {},
//     {}
// ]