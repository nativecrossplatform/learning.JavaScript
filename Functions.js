// FUNCTIONS IN JAVASCRIPT

// Basic Function Syntax
/*
Functions are blocks of code designed to perform a specific task. They are executed when called.
Syntax:
function functionName(parameters) {
    // Code to execute
    return value; // Optional
}
*/

// Example 1: Simple Function
function greet() {
    console.log("Hello, World!"); // Prints a greeting
}
greet(); // Function call

// Example 2: Function with Parameters
function add(a, b) {
    return a + b; // Returns the sum of a and b
}
console.log(add(2, 3)); // Outputs 5

// Example 3: Function with Loops
function multiplyNumbersUpTo(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply each number up to n
    }
    return result;
}
console.log(multiplyNumbersUpTo(5)); // Outputs 120 (5!)

// FUNCTION EXPRESSIONS
/*
Function expressions allow you to define functions as part of an expression.
*/
const subtract = function (a, b) {
    return a - b; // Subtract b from a
};
console.log(subtract(10, 4)); // Outputs 6

// ARROW FUNCTIONS
/*
Arrow functions provide a shorter syntax for writing functions.
Syntax:
const functionName = (parameters) => { // Code to execute };
*/
const divide = (a, b) => a / b; // Single-line arrow function
console.log(divide(10, 2)); // Outputs 5

const square = (n) => {
    return n * n; // Multi-line arrow function
};
console.log(square(4)); // Outputs 16

// HIGHER-ORDER FUNCTIONS
/*
Functions that take other functions as arguments or return them are called higher-order functions.
*/
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2); // map applies the function to each element
console.log(doubled); // Outputs [2, 4, 6, 8, 10]

// DEFAULT PARAMETERS
/*
Default parameters allow you to set default values for function arguments.
*/
function greetUser(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greetUser(); // Outputs "Hello, Guest!"
greetUser("Alice"); // Outputs "Hello, Alice!"

// REST PARAMETERS
/*
Rest parameters allow you to handle an arbitrary number of arguments.
*/
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0); // Sums all arguments
}
console.log(sumAll(1, 2, 3, 4)); // Outputs 10

// ANONYMOUS FUNCTIONS
/*
Anonymous functions are functions without a name. They are often used as arguments to other functions.
*/
setTimeout(function () {
    console.log("This runs after 1 second.");
}, 1000); // Executes the function after 1 second

// IIFE (Immediately Invoked Function Expressions)
/*
IIFE are functions that are executed immediately after being defined.
*/
(function () {
    console.log("IIFE executed!");
})();

// Summary:
/*
- Functions encapsulate reusable blocks of code.
- Function declarations, expressions, and arrow functions provide flexibility in syntax.
- Higher-order functions and features like rest parameters enhance functionality.
- Anonymous functions and IIFE are useful for quick, inline execution.
*/