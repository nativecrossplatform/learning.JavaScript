/*
Strings in JavaScript are used to represent and manipulate text. They are immutable, meaning their content cannot be changed after creation, but operations can return new strings.

Strings are iterable and can be accessed like arrays, but not all array methods apply to them. This tutorial covers string creation, manipulation, and methods in detail.
*/

// 1. Creating Strings
// Strings can be created using single quotes, double quotes, or template literals.
let singleQuoteString = 'Hello';
let doubleQuoteString = "World";
let templateLiteralString = `Welcome, ${singleQuoteString} and ${doubleQuoteString}!`;

console.log(templateLiteralString);

// ===========================================================
// 2. Accessing Characters in a String
// Characters can be accessed using bracket notation or the `charAt()` method.
let name = "John";

console.log("First character:", name[0]); // Bracket notation
console.log("Second character:", name.charAt(1)); // charAt method

// Strings are immutable; you cannot directly modify a character.
name[0] = 'D'; // This will not work
console.log("String remains unchanged:", name);

// ===========================================================
// 3. String Methods

// 3.1 concat()
// Combines strings and returns a new string.
let fullName = name.concat(" Smith");
console.log("Full Name:", fullName);

// 3.2 indexOf() and lastIndexOf()
// Finds the position of a substring. Returns -1 if not found.
console.log("Position of 'o':", name.indexOf('o'));
console.log("Last position of 'o':", name.lastIndexOf('o'));

// 3.3 toUpperCase() and toLowerCase()
// Converts a string to uppercase or lowercase.
console.log("Uppercase:", name.toUpperCase());
console.log("Lowercase:", name.toLowerCase());

// 3.4 split()
// Splits a string into an array based on a delimiter.
let sentence = "This is a test sentence.";
let words = sentence.split(" "); // Split by spaces
console.log("Words Array:", words);

// 3.5 trim()
// Removes whitespace from both ends of a string.
let paddedString = "    Hello World    ";
console.log("Trimmed String:", paddedString.trim());

// ===========================================================
// 4. String Iteration and Loops
// Strings are iterable, and you can loop through their characters.
let greeting = "Hello";
for (let char of greeting) {
  console.log("Character:", char);
}

// Nested loop example for an array of strings
let names = ["John", "James", "Joseph"];
for (let name of names) {
  for (let char of name) {
    console.log(char);
  }
}

// ===========================================================
// 5. Template Literals
// Template literals allow embedding expressions and multi-line strings.
let age = 25;
let introduction = `My name is ${name}, and I am ${age} years old.`;
console.log(introduction);

// ===========================================================
// 6. Advanced String Manipulation

// 6.1 Replace
// Replaces a substring with another substring.
let original = "Hello World";
let replaced = original.replace("World", "Universe");
console.log("Replaced String:", replaced);

// 6.2 Includes
// Checks if a substring exists in a string.
console.log("Contains 'Hello':", original.includes("Hello"));
console.log("Contains 'Earth':", original.includes("Earth"));

// 6.3 StartsWith and EndsWith
// Checks if a string starts or ends with a specified substring.
console.log("Starts with 'Hello':", original.startsWith("Hello"));
console.log("Ends with 'World':", original.endsWith("World"));

// ===========================================================
// 7. Key Points and Best Practices
/*
- Strings are immutable; methods return new strings without modifying the original.
- Use `concat()` or the `+` operator for concatenation.
- Be cautious with case-sensitive methods like `indexOf()` or `replace()`.
- Use `template literals` for cleaner string interpolation and multi-line strings.
- Always trim user input when working with forms to avoid unwanted spaces.
*/