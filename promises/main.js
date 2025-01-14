/*
    Promise: A Promise object links producing and consuming code. Producing code is code
             that can take some time to execute and consuming code is code that must 
             wait for the result.
*/

// Define simple Promise object
let myPromise = new Promise(
    function(resolve, reject) {
        console.log("Producing code"); // Producing code

        const success = true; // Success boolean

        if (success) {
            resolve(); // Call resolve if successful
        } else {
            reject(); // Call reject if unsuccessful
        }
    }
)

// If each Promise fulfilled call respective resolve function else call respective reject function
myPromise.then(() => console.log("Success"), () => console.log("Failure"))
         .then(() => console.log("Success"), () => console.log("Failure"));

// If each Promise fulfilled call respective resolve function else catch with global reject function
myPromise.then(() => console.log("Success"))
         .then(() => console.log("Success"))
         .catch(() => console.log("Failure"));

