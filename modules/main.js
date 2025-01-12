/*
    modules: Allows for the breaking up of code into separate files.
             Functions, variables and objects can be exported from a
             module using named or default exports and imported into
             another module.
*/

// Import from module
import {a, hello, b, bye} from "./module.js" // Imported by name
import {bye as say_bye} from "./module.js" // Imported by name and aliased
import msg from "./module.js" // Default export imported and named 'msg'

// Log imported variables and call imported functions
console.log(a, b)
hello()
say_bye()
console.log(msg)
