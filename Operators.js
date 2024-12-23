/*

Operators are used to perform operations on values and variables. They are categorized into different types based on their functionality. Below is a detailed breakdown of the most commonly used operators in JavaScript.

*/

// 1. Assignment Operators
// Used to assign values to variables.
let a = 10; // Assigns 10 to a

// Compound assignment operators
let b = 5;
b += 2; // Equivalent to b = b + 2
b -= 1; // Equivalent to b = b - 1
b *= 3; // Equivalent to b = b * 3
b /= 2; // Equivalent to b = b / 2
b %= 2; // Equivalent to b = b % 2
b **= 2; // Equivalent to b = b ** 2
console.log("Assignment Operators:", a, b);

// ===========================================================
// 2. Arithmetic Operators
// Perform mathematical operations.
let x = 10;
let y = 3;
console.log("Addition:", x + y); // 13
console.log("Subtraction:", x - y); // 7
console.log("Multiplication:", x * y); // 30
console.log("Division:", x / y); // 3.33...
console.log("Modulus (Remainder):", x % y); // 1
console.log("Exponentiation:", x ** y); // 1000

// Special case with strings
console.log("String Concatenation:", "Hello" + " World!");

// ===========================================================
// 3. Increment/Decrement Operators
// Increase or decrease a value by 1.
let count = 5;
console.log("Post-increment:", count++); // Returns 5, then increments to 6
console.log("After Post-increment:", count); // 6
console.log("Pre-increment:", ++count); // Increments to 7, then returns 7

let count2 = 5;
console.log("Post-decrement:", count2--); // Returns 5, then decrements to 4
console.log("After Post-decrement:", count2); // 4
console.log("Pre-decrement:", --count2); // Decrements to 3, then returns 3

// ===========================================================
// 4. Comparison Operators
// Compare two values and return a boolean (true/false).
console.log("Equal (==):", 5 == "5"); // true (type coercion)
console.log("Strictly Equal (===):", 5 === "5"); // false (no type coercion)
console.log("Not Equal (!=):", 5 != "5"); // false
console.log("Strictly Not Equal (!==):", 5 !== "5"); // true
console.log("Greater than (>):", 10 > 5); // true
console.log("Less than (<):", 10 < 5); // false
console.log("Greater than or equal (>=):", 10 >= 10); // true
console.log("Less than or equal (<=):", 10 <= 5); // false

// ===========================================================
// 5. Logical Operators
// Combine multiple conditions.
console.log("AND (&&):", true && false); // false
console.log("OR (||):", true || false); // true
console.log("NOT (!):", !true); // false

// ===========================================================
// 6. Bitwise Operators
// Perform operations on binary representations.
console.log("Bitwise AND (&):", 5 & 1); // 1 (0101 & 0001 = 0001)
console.log("Bitwise OR (|):", 5 | 1); // 5 (0101 | 0001 = 0101)
console.log("Bitwise XOR (^):", 5 ^ 1); // 4 (0101 ^ 0001 = 0100)
console.log("Bitwise NOT (~):", ~5); // -6 (~0101 = 1010 in 2's complement)
console.log("Left Shift (<<):", 5 << 1); // 10 (0101 << 1 = 1010)
console.log("Right Shift (>>):", 5 >> 1); // 2 (0101 >> 1 = 0010)
console.log("Zero-fill Right Shift (>>>):", 5 >>> 1); // 2 (0101 >>> 1 = 0010)

// ===========================================================
// 7. Type Operators
// Determine types or instances.
console.log("typeof operator:", typeof "Hello"); // "string"
console.log("instanceof operator:", [] instanceof Array); // true

// ===========================================================
// 8. Ternary Operator
// A shorthand for if-else.
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can Vote:", canVote);

// ===========================================================
// Summary
/*
- Assignment operators assign values to variables.
- Arithmetic operators handle basic mathematical operations.
- Increment/Decrement operators increase or decrease a value by 1.
- Comparison operators compare values and return booleans.
- Logical operators combine multiple conditions.
- Bitwise operators work at the binary level.
- Type operators determine the type or instance of a value.
- The ternary operator is a compact form of conditional statements.
*/
