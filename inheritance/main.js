/*
    inheritance: Allows a new class to inherit properties and
                 methods form an existing class.
*/

// Define Animal superclass
class Animal { 
    // Properties
    alive = true;

    // Methods
    eat() {
        console.log("This animal eats")
    }

    sleep() {
        console.log("This animal sleeps")
    }
}

// Define subclasses
class Mammal extends Animal {
    // Methods
    run() {
        console.log("This animal runs")
    }
}

class Fish extends Animal {
    // Methods
    swim() {
        console.log("This animal swims")
    }
}

class Bird extends Animal {
    // Methods
    fly() {
        console.log("This animal flys")
    }
}

// Construct objects
mammal = new Mammal()
fish = new Fish()
bird = new Bird()

// Call properties/methods from parent class
console.log(mammal.alive)
fish.eat()

// Call methods from subclass
mammal.run()
bird.fly()