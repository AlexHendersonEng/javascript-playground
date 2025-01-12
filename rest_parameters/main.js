/*
    rest parameters (...): Allows a function to accept a variable number of arguments by
                           bundling them into an array.
*/

// Define variables
const one = "one";
const two = "two";
const three = "three";
const four = "four";
const five = "five";

// Define a function using rest parameters
function printItems(...items) {
    for (let item of items) {
        console.log(item);
    }
}

// Call function
printItems(one, two, three, four, five);