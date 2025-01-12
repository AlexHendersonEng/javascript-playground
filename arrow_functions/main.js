/*
    Arrow functions: A concise way to write function expressions using the following notation:
                     (parameters) => some code
                     (parameters) => {
                                      some code
                                     }
*/

// Define standard function expression
const hello = function() {
    console.log("Hello");
}

// Define arrow function expression
const bye = () => console.log("Bye");

// Call functions
hello()
bye()