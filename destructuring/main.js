/*
    Destructuring: Allows for the extraction of values from arrays/objects
                   and reassignment in a convenient way.
                   For array => [element1, element2] = array
                   For object => {property1, property2} = object
*/

// Define array
const a = [1, 2];

// Use destructuring to split array into two variables
const [b, c] = a;

// Print out values
console.log(b, c);

// Define object
const person = {
    firstName: "First",
    lastName: "Last"
}

// Use destructuring to split object into two variables
const {firstName, lastName} = person;

// Print out value
console.log(firstName, lastName);

