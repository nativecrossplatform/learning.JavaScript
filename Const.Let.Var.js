// Understanding const, let, and var in JavaScript

// VAR
// 'var' is function-scoped. It can be redeclared and updated within the same scope.
var x = 10;
console.log(x); // Output: 10

var x = 20; // Redeclaration is allowed
console.log(x); // Output: 20

// 'var' is hoisted to the top of its scope but is not initialized.
console.log(y); // Output: undefined (hoisting)
var y = 30;

// LET
// 'let' is block-scoped. It cannot be redeclared in the same block but can be updated.
let a = 10;
console.log(a); // Output: 10

// let a = 20; // SyntaxError: Identifier 'a' has already been declared (in the same block)
a = 20; // Updating the value is allowed
console.log(a); // Output: 20

// 'let' respects block scope.
{
    let b = 30;
    console.log(b); // Output: 30
}
// console.log(b); // ReferenceError: b is not defined (outside block)

// CONST
// 'const' is block-scoped and must be initialized when declared. It cannot be updated or redeclared.
const c = 40;
console.log(c); // Output: 40

// c = 50; // TypeError: Assignment to constant variable
// const c = 60; // SyntaxError: Identifier 'c' has already been declared

// Objects and arrays declared with 'const' can have their contents modified, but the reference cannot change.
const obj = { key: "value" };
obj.key = "newValue"; // Allowed
console.log(obj); // Output: { key: "newValue" }

// obj = { newKey: "newValue" }; // TypeError: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // Output: [1, 2, 3, 4]

// arr = [5, 6]; // TypeError: Assignment to constant variable

// Summary:
// - Use 'var' sparingly (generally avoid it) as it has function scope and is prone to bugs due to hoisting.
// - Use 'let' for variables that need to change and have block-level scope.
// - Use 'const' for variables that should not change their reference after initialization.

// Best Practices:
// - Prefer 'const' by default unless the variable needs to change.
// - Use 'let' when reassignment is required.
// - Avoid using 'var' to prevent scope-related issues.
