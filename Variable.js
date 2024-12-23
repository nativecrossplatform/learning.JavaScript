// Section 1: Declaring and Initializing Variables
// ----------------------------------------------
// A variable in JavaScript is a container for storing data values.
// Variables are declared using the "var", "let", or "const" keywords. Here we use "var".

var person; // Declaring a variable without initializing it
person = 'John'; // Initializing the variable with a value

// Now we use the variable in a console log statement
console.log("Hello,", person); // Outputs: Hello, John

/*
 * Explanation:
 * - We declared the variable "person" without any initial value.
 * - We then initialized "person" with the string value 'John'.
 * - The console log outputs the message "Hello, John" using the value stored in the "person" variable.
 */

// Section 2: Reassigning Variables
// ------------------------------
// Variables in JavaScript can be reassigned to new values after their initial assignment.

var greeting; // Declaring another variable without initializing it
greeting = 'Hello,'; // Initializing the variable with a greeting

console.log(greeting, person); // Outputs: Hello, John

/*
 * Explanation:
 * - The variable "greeting" was declared and initialized with the string value 'Hello,'.
 * - When we print both "greeting" and "person", we get "Hello, John" because "person" was assigned 'John' earlier.
 */

// Reassigning the "person" variable to a new value
person = 'James'; // Reassigning a new value to "person"

console.log(greeting, person); // Outputs: Hello, James

/*
 * Explanation:
 * - We reassigned the "person" variable from 'John' to 'James'.
 * - Now, when we print "greeting" and "person", the output changes to "Hello, James".
 */


// Conclusion
// -----------
// - Variables in JavaScript can be declared, initialized, and reassigned.
// - Once a variable has been assigned a value, it can be used throughout the code.
// - Reassignment allows you to change the value of the variable later on.