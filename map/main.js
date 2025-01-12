/*
    map: A method used to iterate over the elements in an array,
         apply a specified function and return a new array.
*/

// Define array
let nums = [1, 2, 3, 4, 5]

// Define function
function square(item) {
    return item ** 2
}

// Use map method to call function on each element and get new array
const squares = nums.map(square)
console.log(...squares)