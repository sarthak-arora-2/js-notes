// Dates

// let myDate = new Date()
// console.log(myDate.toString());  // Wed Jun 18 2025 18:07:36 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  // Wed Jun 18 2025
// console.log(myDate.toLocaleString());  // 18/6/2025, 6:07:36 pm
// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0, 23)  // Input: (year, month-1, date)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // Input: (year, month-1, date, hours, minutes)
// let myCreatedDate = new Date("2023-01-14")  // Input: string(year-month-date)
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);  // We add 1 because getMonth() give month from 0th index.
console.log(newDate.getDay());  // Gives 3 because today is Wednesday.

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})