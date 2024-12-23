// Section 1: Understanding "null"
// -------------------------------
// "null" is a special value in JavaScript that represents the intentional absence of any object value.
// It is often used to indicate that a variable should contain an object but currently does not.

var str = 'abc';

// Example of using the .match() method
// The .match() method returns the matches for a given regular expression.
console.log('Match for "a":', str.match(/a/)); // Outputs: ["a"]
console.log('Match for "z":', str.match(/z/)); // Outputs: null

/*
 * Here, the first example returns the match details for the letter "a".
 * The second example returns "null" because there is no match for the letter "z".
 * This shows how "null" can be the result when there is no match or no value.
 */

// Section 2: Understanding "undefined"
// ------------------------------------
// "undefined" is a primitive value in JavaScript that represents the state of a variable that has been declared but not yet assigned a value.
// It is also returned when attempting to access a non-existent property or method of an object.

var noise; // Declaring a variable without initializing it

console.log('Value of "noise":', noise); // Outputs: undefined

// Now assigning a value to "noise"
noise = 'aaa';
console.log('Updated value of "noise":', noise); // Outputs: aaa

/*
 * "undefined" appears in two key scenarios:
 * 1. When a variable is declared but not yet assigned a value.
 * 2. When trying to access a property or method that does not exist.
 * The above code demonstrates both scenarios.
 */

// Section 3: Understanding "empty" Values
// ---------------------------------------
// An "empty" value typically refers to structures or variables that are initialized but do not yet contain any meaningful data.
// The most common "empty" values are empty strings and empty objects.

var emptyString = ''; // An empty string is a string with no characters
console.log('Empty string:', emptyString); // Outputs: ""

var emptyArray = []; // An empty array
console.log('Empty array:', emptyArray); // Outputs: []

var emptyObject = {}; // An empty object
console.log('Empty object:', emptyObject); // Outputs: {}

// Summary of empty values
/*
 * - An empty string ('') represents a string that exists but has no characters.
 * - An empty array ([]) is an array that exists but has no elements.
 * - An empty object ({}) is an object that exists but has no properties.
 */

// Conclusion
// -----------
// "null", "undefined", and "empty" represent different states in JavaScript.
// - "null" represents an intentional absence of any value.
// - "undefined" represents an uninitialized or non-existent value.
// - "empty" values like empty strings, arrays, or objects are initialized but contain no meaningful data.
