/*
    await: Makes an async function wait for a promise.
*/

// Define async function which uses await 
async function asyncFunction() {
    // Construct promise object
    let myPromise = new Promise(function(resolve, reject) {
        // By default resolve function will return arguments
        resolve("Hello World!");
    });

    // Await result of promise object
    result = await myPromise;
    console.log(result);
}

// Call async function
asyncFunction();