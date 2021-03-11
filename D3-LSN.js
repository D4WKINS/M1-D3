// ************************* TERNARY OPERATOR **********************************


// let studentAge = 17


// let price
// if(studentAge > 18) {
//   price="$20"
// } else {
//   price="$15"
// }


// let price = studentAge > 18 ? "$20" : "$15"
// console.log(price)


// let truthyOrFalsy = 1 ? "truthy" : "falsy"


// let truthyOrFalsy = 0 ? "truthy" : "falsy"
// let truthyOrFalsy = undefined ? "truthy" : "falsy"
// let truthyOrFalsy = "" ? "truthy" : "falsy"
// let truthyOrFalsy = null ? "truthy" : "falsy"
// let truthyOrFalsy = NaN ? "truthy" : "falsy"


// let truthyOrFalsy = null === undefined ? "truthy" : "falsy" // NEVER USE DOUBLE EQUALITY USE ALWAYS TRIPLE EQUALITY
// console.log(truthyOrFalsy)


// **************************************** OBJECTS ********************************************


// let user = {} // Empty object


// let user2 = {
//   name: "John", // key:value,
//   surname: "Rambo", // key:value,
//   age: 18, // key:value,
//   job: "whatever", // key:value,
//   hasDrivingLicense: true, // key:value,
//   "is Student": true, // key:value
// }
// console.log(user2.name + " " + user2.surname)
// console.log(user2.age)
// console.log(user2["is Student"])
// if (user2.firstName !== undefined) {
//   // ! = = not equal
//   console.log(user2.firstName.toUpperCase()) // I can't use toUpperCase
// } else {
//   // user2.firstName was undefined
//   console.log("firstname is undefined")
// }


// console.log(user2)


// user2.firstName = "whatever"


// console.log(user2, user3)


// user2.firstName = "ojasodijaoisdjoaisjd"


// // console.log(user2)


// delete user2.firstName


// console.log(user2)


// user2.job = {
//   job1: "job1",
//   job2: "job2",
// }


// console.log(user2)


// let user2 = {
//   name: "John", // key:value,
//   surname: "Rambo", // key:value,
//   age: 18, // key:value,
//   job: "whatever", // key:value,
//   hasDrivingLicense: true, // key:value,
//   "is Student": true, // key:value
// }


// let variable1 = "A string"


// let variable2 = variable1


// console.log(variable2)


// let user3 = user2 // DO NOT USE THIS TO CLONE OBJECTS


// console.log(user3)


// user3.name = "Arnold"


// // console.log(user3)


// console.log(user2)


// let user3 = Object.assign({}, user2) // SAFE WAY TO CLONE ALL THE PROPERTIES INTO ANOTHER OBJECT


// user3.name = "Arnold"
// console.log(user3)


// console.log(user2)


// const user3 = Object.assign({}, user2) // USE CONST EVERYWHERE IS POSSIBLE


// Object.assign()
// const myString = "my string"
// const myNumber = 12
// const myBool = true
// myBool = false


// user3.age = 100


// user3 = user2
// console.log(user3)


// **************************************** ARRAYS **********************************************


// const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 123331231631]
// console.log("First element of the array ", listOfNumbers[0]) //If I want to access to a single element of the array I need to specify in square brackets the INDEX
// //listOfNumbers[index] INDEXES STARTS FROM ZERO!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log("Fifth element of the array ", listOfNumbers[4])
// console.log("Sixth element of the array ", listOfNumbers[5])
// console.log(
//   "Last element of the array ",
//   listOfNumbers[listOfNumbers.length - 1]
// )
// console.log("Number of elements of the array --> ", listOfNumbers.length)


// const listOfStrings = ["Hello", "Strivers", "!"]
// const listOfBools = [true, false, false, true, false, true]
// const mixedList = [true, "A string", 123.42]
// const listOfUsers = [
//   { name: "John", surname: "Rambo" }, // index 0
//   { name: "Arnold", surname: "Schwarzenegger" }, // index 1
//   { name: "Bruce", surname: "Lee" }, // index 2
// ]


// console.log("Length of listOfUsers array is ", listOfUsers.length)
// console.log(listOfUsers.surname) // The array itself does NOT have a property called surname --> undefined


// console.log(listOfStrings[0][3])


// console.log(listOfUsers.map(user => user.surname))


// const user1 = listOfUsers[0]
// const user2 = listOfUsers[1]


// console.log(listOfUsers[0].name + listOfUsers[2].surname)


// listOfUsers.push({ name: "JeanClaude", surname: "VanDamme" })


// console.log("Length of listOfUsers array is ", listOfUsers.length)
// console.log(listOfUsers)
// console.log(
//   "POP removes and returns the last element of the array: ",
//   listOfUsers.pop()
// )
// console.log("AFTER THE POP ")
// console.log("Length of listOfUsers array is ", listOfUsers.length)
// console.log(listOfUsers)


// console.log(
//   "SHIFT removes the first element of the array: ",
//   listOfUsers.shift()
// )


// console.log("AFTER THE SHIFT ")
// console.log("Length of listOfUsers array is ", listOfUsers.length)
// console.log(listOfUsers)


// const user3 = {
//   name: "John", // key:value,
//   surname: "Rambo", // key:value,
//   age: 18, // key:value,
//   jobs: ["job1", "job2"], // key:value,
//   hasDrivingLicense: true, // key:value,
//   "is Student": true, // key:value
// }


// user3.jobs.push("a new job")


// ************************************************** LOOPS **********************************************


// WHILE


// while (true) { // INFINITE LOOP (BAD)
//   // repeat code
//   console.log("Hello")
// }


// let myNumber = 0


// while (myNumber < 10000) {
//   console.log(myNumber) // myNumber = 0 || myNumber = 1
//   myNumber = myNumber + 10 // myNumber = 0 + 1 || myNumber = 2
// }


// 2^10


// let result = 1
// let counter = 0


// while (counter < 10) {
//   result = result * 2
//   console.log("Current result ", result)
//   counter = counter + 1
//   console.log("Current counter ", counter)
// }


// console.log("2 elevated 10 is: ", result)


// FOR LOOP


// for(initial expression; condition; increment){


// }


// for (let counter = 0; counter < 10; counter = counter + 1) {
//   console.log("Current counter ", counter)
// }


// First iteration counter = 0
// Second iteration counter = 1
// Third iteration counter = 2


// Tenth iteration counter = 9
// Exit loop


// LOOPS & ARRAYS


// const arrayOfNumbers = [
//   2,
//   13,
//   543,
//   56756,
//   12312,
//   123,
//   213,
//   546,
//   567,
//   678,
//   1232,
//   123,
//   213,
//   123,
//   213,
//   12,
//   3,
//   54,
//   45,
//   645,
//   65,
//   645,
//   6,
//   56,
//   456,
//   456,
//   54,
//   645,
// ]
// const lastIndex = arrayOfNumbers.length - 1


// for (let index = 0; index <= lastIndex; index = index + 1) {
//   arrayOfNumbers[index] = 0
//   console.log(arrayOfNumbers[index])
// }


// console.log(arrayOfNumbers[index])
