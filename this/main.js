/*
    this: A reference to the object where 'this' is used which
          is dependent on the immediate context. The 'this' keyword
          behaves differently with arrow functions as it binds 'this'
          to the object when the function was defined rather than
          the object on which the arrow function is a property.
*/

// Create a person object
const person = {
    firstName: "First",
    LastName: "Last",
    age: 20,
    isEmployed: true,
    hello: function() {console.log(`${this.firstName} says hello`)}, // 'this' used to access current objects property
    bye: function() {console.log(`${this.firstName} says bye`)}, // 'this' used to access current objects property
}

// Call person methods
person.hello()
person.bye()