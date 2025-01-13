/*
    try {}: Encloses code that might potentially throw an error.
    catch (error) {}: Catch and handle any errors thrown in try.
    finally {}: (optional) Always executes whether there is an error or not.
*/

// Define try, catch and finally block
try {
    throw new Error("Error!"); // Throw error
} catch(error) {
    console.log("There was an error!");
    console.log(error);
} finally {
    console.log("This is always executed!");
}
