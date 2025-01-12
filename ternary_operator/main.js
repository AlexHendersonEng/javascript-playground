/* The ternary operator allows for if/else statements to be written
   in a simpler manner on one line:
   (condition) ? expression : expression */

// Define variable
let marks = 71;
let res;

// Work out if person passed using standard if else statement
if (marks > 70) {
    res = "Pass"
} else {
    res = "Fail"
}
console.log(res);

// Work out if person passed using ternary operator
res = (marks > 70) ? "Pass" : "Fail"
console.log(res);