/*
    static: A keyword that defines properties or methods that belong to
            a class itself rather than the objects created from that class.
*/

// Define class with static properties and methods
class MathUtil {
    // Static property
    static PI = 3.14;

    // Static method
    static getArea(radius) {
        return MathUtil.PI * radius ** 2;
    }
}

// Log static property and call static method
console.log(MathUtil.PI); // As property is static an object does not
                          // need to be created to use the static property
console.log(MathUtil.getArea(4)); // As method is static an object does not
                                  // need to be created to use the static method