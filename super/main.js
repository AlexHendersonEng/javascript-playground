/*
    super: The super keyword can be used to construct and access the parent object.
*/

// Define Animal superclass
class Animal { 
    // Properties
    alive = true;

    // Constructor
    constructor(name) {
        this.name = name;
    }

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
    // Constructor
    constructor(name, runSpeed) {
        super(name); // Call superclass constructor
        this.runSpeed = runSpeed;
    }

    // Methods
    run() {
        console.log("This animal runs")
    }

    live() {
        super.eat() // Call superclass method
        this.run()
        super.sleep() // Call superclass method
    }
}

class Fish extends Animal {
    // Constructor
    constructor(name, swimSpeed) {
        super(name); // Call superclass constructor
        this.swimSpeed = swimSpeed;
    }

    // Methods
    swim() {
        console.log("This animal swims")
    }

    live() {
        super.eat() // Call superclass method
        this.swim()
        super.sleep() // Call superclass method
    }
}

class Bird extends Animal {
    // Constructor
    constructor(name, flySpeed) {
        super(name); // Call superclass constructor
        this.flySpeed = flySpeed;
    }

    // Methods
    fly() {
        console.log("This animal flys")
    }

    live() {
        super.eat() // Call superclass method
        this.fly()
        super.sleep() // Call superclass method
    }
}

// Construct objects
mammal = new Mammal("Mammal", 10)
fish = new Fish("Fish", 5)
bird = new Bird("Bird", 20)

// Log properties and call methods from subclasses
mammal.live()
console.log()
fish.live()
console.log()
bird.live()