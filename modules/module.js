// Named export inline individually
export const a = 1;
export const hello = function() {
    console.log("Hello");
};

// Named export together
const b = 2;
const bye = function() {
    console.log("Bye");
};
export {b, bye};

// Default export
const message = "Hello World!";
export default message; // There can only be one default export per file