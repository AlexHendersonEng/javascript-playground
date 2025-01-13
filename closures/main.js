/*
    closures: A way of allowing functions to have private stateful variables.
*/

// Define self invoking closure function
const add = (function() {
    let count = 0; // Private stateful variable 
    return function() { 
        count += 1;
        return count;
    }
})();

// Call function
a = add();
b = add();
c = add();

// Print values
console.log(a, b, c);