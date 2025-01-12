/*
    Spread operator (...): Allows an iterable such as an array or string to be
                           expanded into its separate elements.
*/

// Define array
let nums = [1, 2, 3, 4, 5];

// Get and log maximum in nums array using the spread operator
let maximum = Math.max(...nums);
console.log(maximum);

// Define string
let message = "Hello World!";

// Use spread operator to break up string, reformat and then log
let new_message = [...message].join("-");
console.log(new_message);
