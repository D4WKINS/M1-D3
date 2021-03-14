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
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

    const array = [1,3,5]
    array.reverse()
    console.log(array)

/* WRITE YOUR CODE HERE */

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/
    const arr = [1,2,3];
    let max = arr.reduce(function(a, b) {
        return Math.max(a, b);// a = 0 , b = 1 + 2+ 3
    });
    console.log(max)

//a and b is equal to const reducer = (accumulator, currentValue) => accumulator + currentValue;
// The Result of function uses Math.max and returns the highest value of the array
// reduce applies the result of callback function for every item in the array
//This also works but will not work if there too many elements, the reduce method doesnt have this problem
// let arr = [1, 2, 3];
// let max = Math.max(...arr);
// console.log(max)
    



/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

    let min = arr.reduce(function(a,b){
        return Math.min(a,b)
    })
    console.log(min)

/* WRITE YOUR CODE HERE */

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

    const arr2 = [2, 25, 36,48,81]
    const even = []
    for(let i = 0; i<arr2.length; i++){
        if(arr2[i] % 2 === 0)
            even.push(arr2[i])
       }
    
    console.log(even)



/* EXERCISE 5
Write the code to delete even entries from an array.
*/

    for(let i=0; i < arr2.length; i++){

        if(arr2[i] % 2 === 0){

            
        }

    }

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
  


/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/