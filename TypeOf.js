/*
The `typeof` operator in JavaScript is used to determine the type of a value or expression. It returns a string representing the data type.
*/

// ===========================================================
// 1. Basic Usage of `typeof`

// Checking the types of various values
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null); // "object" (this is a historical quirk in JavaScript)
console.log("typeof true:", typeof true); // "boolean"
console.log("typeof 42:", typeof 42); // "number"
console.log("typeof 'Hello':", typeof "Hello"); // "string"
console.log("typeof Symbol('example'):", typeof Symbol("example")); // "symbol"
console.log("typeof BigInt(123):", typeof BigInt(123)); // "bigint"

// ===========================================================
// 2. Using `typeof` with Functions and Objects

// Functions
console.log("typeof function() {}:", typeof function () {}); // "function"

// Arrays (note: arrays are technically objects)
console.log("typeof []:", typeof []); // "object"

// Plain objects
console.log("typeof {}:", typeof {}); // "object"

// Regular expressions
console.log("typeof /regex/:", typeof /regex/); // "object"

// Dates
console.log("typeof new Date():", typeof new Date()); // "object"

// ===========================================================
// 3. Using `typeof` with Statements

// `typeof` can be applied to expressions and statements
console.log("typeof (5 + 3):", typeof (5 + 3)); // "number"
console.log("typeof ('hello' + ' world'):", typeof ("hello" + " world")); // "string"
console.log("typeof (true && false):", typeof (true && false)); // "boolean"
console.log("typeof (() => {}):", typeof (() => {})); // "function"

// ===========================================================
// 4. Special Cases and Considerations

// `null` returns "object" due to a historical bug
console.log("typeof null:", typeof null); // "object"

// Distinguishing arrays and objects
const isArray = Array.isArray([]);
console.log("Is [] an array?", isArray); // true

// `typeof` with NaN
console.log("typeof NaN:", typeof NaN); // "number"
console.log("Is NaN a valid number?", isNaN(NaN)); // true
// ===========================================================
// 5. Key Points and Best Practices
/*
- Use `typeof` to check the type of a variable or expression.
- Be cautious with `null`, as it returns "object" instead of "null".
- Use `Array.isArray()` to distinguish arrays from other objects.
- `typeof` is useful for runtime type checking and debugging.
- For more detailed type-checking, consider other methods like `instanceof` or utility libraries.
*/