/*
    filter: A method that returns a new array by filtering out elements
            based on a specified function.
*/

// Define array
let nums = [1, 2, 3, 4, 5]

// Define function
function is_even(item) {
    return !(item % 2)
}

// Use filter method to filter out elements in array
const even_nums = nums.filter(is_even)
console.log(...even_nums)