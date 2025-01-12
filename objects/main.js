/*
    object: A collection of related properties and/or methods
            with the following syntax:
            object = {key: value,
                      key: function}

*/

// Create a person object
const person = {
    firstName: "First",
    LastName: "Last",
    age: 20,
    isEmployed: true,
    hello: () => console.log('Hello'),
    bye: () => console.log('Bye'),
}

// Log person object property and call method
console.log(person.firstName)
person.hello()