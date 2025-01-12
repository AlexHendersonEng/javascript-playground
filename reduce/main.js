/*
    reduce: A method that reduces the elements in an array to
            a single value.
*/

// Define array
let nums = [1, 2, 3, 4, 5]

// Define function
function add(item1, item2) {
    return item1 + item2
}

// Use reduce method to reduce array to single value
const total = nums.reduce(add)
console.log(total)