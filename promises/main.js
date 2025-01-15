/*
    Promise: A Promise object is a 'promise' that some code will be executed
             and after it has finished either the resolve will be called if
             successful or reject if not successful.
*/

// Define simple Promise object
let myPromise = new Promise(
    function(resolve, reject) {
        console.log("Executing code");

        const success = true; // Success boolean

        if (success) {
            resolve(); // Call resolve if successful
        } else {
            reject(); // Call reject if unsuccessful
        }
    }
)

// If each Promise executes successfully call respective resolve function else call respective reject function
myPromise.then(() => console.log("Success"), () => console.log("Failure"))
         .then(() => console.log("Success"), () => console.log("Failure"));

// If each Promise executes successfully call respective resolve function else catch with global reject function
myPromise.then(() => console.log("Success"))
         .then(() => console.log("Success"))
         .catch(() => console.log("Failure"));

