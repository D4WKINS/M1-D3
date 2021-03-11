/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

    // const firstFiveNumbers = [1, 2, 3, 4, 5]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

//Object using literal notation

    // const id = {
    //     name: "Carl",
    //     surname: "Dawkins",
    //     email: "carlanthony782@gmail.com",
    //     age: 22
    // }

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

    // id.drivingLicence = false
    // console.log(id)

/* EXERCISE 4
Remove from the previously created object the age property.
*/

    // delete id.age
    // console.log(id)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

//Object using constructor notation

    // let id2 = new Object();
    // id2.name = "Carl"
    // id2.surname = "Dawkins"
    // id2.email = "carlanthony782@gmail.com"
    // console.log(id2)

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
    // let shippingCost;
    // let totalShoppingCart = 55
    // shippingCost = totalShoppingCart > 50 ? "free" : shippingCost = 10;
    // console.log(shippingCost)

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/


let shippingCost;
    let totalShoppingCart = 55
    shippingCost = totalShoppingCart > 50 ? "free" : shippingCost = 10;
    totalShoppingCart = (totalShoppingCart+shippingCost)*0.2;
    console.log(totalShoppingCart)

//WRONG

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

    // let car1 = {
    //     licensePlate: "T00 S10W",
    //     brand: "Vauxhall",
    //     model:"Corsa"
    // }

   
    // let car2 =  Object.assign({licensePlate: "1MTH3 M4N" }, {brand: "Vauxhall", model:"Corsa" })
    // let car3 =  Object.assign({licensePlate: "C0ME ATM3"}, {brand: "Vauxhall", model:"Corsa" })
    // let car4 =  Object.assign({licensePlate: "BR0 C0D3"}, {brand: "Vauxhall", model:"Corsa" })
    // let car5 =  Object.assign({licensePlate: "5T4Y H4RD"}, {brand: "Vauxhall", model:"Corsa" })

    /*
      let myCar2 = {...myCar1} is the same as
        let myCar2 = {}
        myCar2 = Object.assign({}, myCar1)
 */

      
/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/
    // const carsForRent = [];

    // carsForRent.push(car1)
    // carsForRent.push(car2)
    // carsForRent.push(car3)
    // carsForRent.push(car4)
    // carsForRent.push(car5)

    // console.log(carsForRent)



/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

    // carsForRent.pop()
    // carsForRent.shift()
    // console.log(carsForRent)



/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

    // for(let key in car1){
    //     console.log(typeof(key))
    // }

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

    // const carsForSale =[]
    // carsForSale.push(car1)
    // carsForSale.push(car5)
    // console.log(carsForSale)

    // let totalCars = carsForSale.length + carsForRent.length;
    // console.log(totalCars)



/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

    // for(let key in carsForSale){
    //     let sellCarData = carsForSale[key]
    //     sellCarData = Object.values(sellCarData)
    //     console.log(sellCarData)
    // }

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/