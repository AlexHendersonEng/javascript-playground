/*
    forEach: A method used to iterate over the elements in an array
             and apply a specified function to each element.
*/

// Define array
let nums = [1, 2, 3, 4, 5]

// Define function
function display(item) {
    console.log(item)
}

// Use forEach method to call function on each element
nums.forEach(display)