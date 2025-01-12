/*
    constructor: A special function for defining the properties
                 and methods of objects.
*/

// Define constructor for person object
function Person(firstName, lastName, age, isEmployed) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isEmployed = isEmployed;
}

// Construct person objects using constructor
const person1 = new Person("First", "Last", 20, true);
const person2 = new Person("First1", "Last1", 21, false);

// Log property from both objects
console.log("Person 1 first name:", person1.firstName)
console.log("Person 2 last name:", person2.lastName)