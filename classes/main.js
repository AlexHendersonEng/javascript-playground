/*
    class: Provides a structured and clean way to work with objects
           compared to traditional constructor function approach.
*/

// Define Person class
class Person {
    // Define constructor
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Method
    hello() {
        console.log(`${this.firstName} says hello`);
    }
}

// Construct object
const person = new Person("First", "Last", 20);

// Log object property and call method
console.log(person.firstName)
person.hello()