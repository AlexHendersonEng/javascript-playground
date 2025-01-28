/*
    in operator: Checks if a property is in an object
*/

// Create an object with some properties
const person = {
    name: "Alice",
    age: 25
};
  
// Use the 'in' operator to check if a property exists in the object
console.log("name" in person); // true
console.log("age" in person);  // true
console.log("gender" in person); // false
  
// The 'in' operator also works with arrays to check for an index
const fruits = ["apple", "banana", "cherry"];
console.log(0 in fruits); // true (index 0 exists)
console.log(3 in fruits); // false (index 3 does not exist)