/*
    getter: Special method that is called when reading a property from an object.

    setter: Special method that is called when writing a property to an object.
*/

// Define Rectangle class
class Rectangle {

    // Constructor
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Setters
    set width(newWidth) {
        // Called when setting the width property
        this._width = newWidth // _varName convention used to show this variable is
                               // private and for internal use only.
        console.log("Setting width property");
    }

    set height(newHeight) {
        // Called when setting the height property
        this._height = newHeight // _varName convention used to show this variable is
                                 // private and for internal use only.
        console.log("Setting height property");
    }

    // Getters
    get width() {
        // Called when getting the width property
        console.log("Getting width property");
        return this._width;
    }

    get height() {
        // Called when getting the height property
        console.log("Getting height property");
        return this._height;
    }

    get area() {
        // Define get method for area so it can be accessed like a property
        return this._width * this._height;
    }
}

// Construct rectangle object
rectangle = new Rectangle(2, 3);

// Log rectangle widht and height
console.log("Width:", rectangle.width)
console.log("Height:", rectangle.height)
console.log("Area:", rectangle.area)