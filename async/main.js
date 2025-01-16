/*
    async: Makes a function return a promise.
*/

// Define async function
async function asyncFunction() {
    return "Hello";
}

// Handle promise
asyncFunction().then(
    function(value) { console.log(value) },
    function(error) { console.log(error) }
);