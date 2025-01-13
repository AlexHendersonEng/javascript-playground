/*
    callback: A function passed as an argument to another function
*/

// Define callback function
function bye() {
    console.log("Bye");
}

// Define function accepting callback as parameter
function hello(callback) {
    console.log("Hello");
    callback();
}
  
// Call function
hello(bye);