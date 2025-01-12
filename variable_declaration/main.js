/* 
    let: The let keyword can be used to declare variables that have
         block scope. Variables declared using let must be declared
         before use and cannot be redeclared in the same scope.
         Variables declared using the let keyword can be declared
         and the assigned a value on different lines.
*/

/* 
    var: The var keyword can be used to declare variables that have a
         global scope. Variables using the var keyword cannot have a
         block scope. Variables declared using the var keyword can be
         declared and the assigned a value on different lines.
*/

/* 
    const: The const keyword can be used to declare variables that have
           block scope and cannot be redeclared or reassigned. Variables
           defined using const often are in all capitals. Variables declared
           using the const keyword must be assigned a value when declared.
*/

/*
    Overview of variable declaration differences:

        | keyword | Scope | Redeclare | Reassign | Hoisted | Binds this |
        ----------------------------------------------------------------
        |   var   |  No   |    Yes    |   Yes    |   Yes   |    Yes     |
        |   let   |  Yes  |    No     |   Yes    |   No    |    No      |
        |   const |  Yes  |    No     |   No     |   No    |    No      |
*/

// Declare variable using let
{
    let a;
    a = 2; // or could be simplified to 'let a = 2;'
    a = 3; // Reassign value
    console.log('Variable declared using let:', a)
}
/* The variable 'a' cannot be used here as it is outside the scope
   in which it was declared */

// Declare variable using var
{
    var b;
    b = 5; // or could be simplified to 'var b = 5;'
}
/* The variable 'b' can be used anywhere as it has global scope */
b = 6; // Reassign value
console.log('Variable declared using var:', b)

// Declare variable using const
{
    const C = 8; // Must be assinged a value on declaration and cannot be reassigned
    console.log('Variable declared using const:', C)
}
/* The variable 'C' cannot be used here as it is outside the scope
   in which it was declared */