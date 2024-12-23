/*

Scoping defines where variables can be accessed or modified in your code. Understanding scope and the scope chain is essential for writing efficient and bug-free JavaScript.

*/

// 1. Global Scope
// Variables declared outside any function or block have global scope.
let globalVar = "I am a global variable";

function globalScopeExample() {
  console.log(globalVar); // Accessible here
}

console.log("Global Scope:", globalVar); // Accessible globally

// ===========================================================
// 2. Function Scope
// Variables declared inside a function are scoped to that function.
function functionScopeExample() {
  let functionVar = "I am a function-scoped variable";
  console.log("Inside Function:", functionVar);
}

functionScopeExample();
// console.log(functionVar); // Error: functionVar is not defined

// ===========================================================
// 3. Block Scope
// Variables declared with `let` and `const` are block-scoped.
if (true) {
  let blockVar = "I am a block-scoped variable";
  console.log("Inside Block:", blockVar);
}
// console.log(blockVar); // Error: blockVar is not defined

// Note: Variables declared with `var` do not have block scope.
if (true) {
  var noBlockScope = "I am NOT block-scoped";
}
console.log("Outside Block:", noBlockScope); // Accessible here

// ===========================================================
// 4. Lexical Scope
// A function has access to variables defined in its outer scope.
function outerFunction() {
  let outerVar = "I am defined in the outer function";

  function innerFunction() {
    console.log("Accessing Outer Variable:", outerVar); // Accessible
  }

  innerFunction();
}

outerFunction();

// ===========================================================
// 5. Scope Chain
// When a variable is accessed, JavaScript looks for it in the current scope. If not found, it moves up the scope chain.
let globalName = "Global";

function firstFunction() {
  let firstName = "First";

  function secondFunction() {
    let secondName = "Second";
    console.log("Accessing secondName:", secondName); // Found in current scope
    console.log("Accessing firstName:", firstName); // Found in parent scope
    console.log("Accessing globalName:", globalName); // Found in global scope
  }

  secondFunction();
}

firstFunction();

// ===========================================================
// 6. Closures
// A closure is a function that retains access to its outer scope even after the outer function has returned.
function closureExample() {
  let count = 0;

  return function increment() {
    count += 1;
    console.log("Count:", count);
  };
}

let counter = closureExample();
counter(); // 1
counter(); // 2
counter(); // 3

// ===========================================================
// 7. Variable Hoisting
// Variables declared with `var` are hoisted to the top of their scope but are not initialized.
console.log(hoistedVar); // undefined (declaration is hoisted)
var hoistedVar = "I am hoisted";

// Variables declared with `let` and `const` are also hoisted but are in the "temporal dead zone."
// console.log(hoistedLet); // ReferenceError
let hoistedLet = "I am not accessible before declaration";

// ===========================================================
// 8. Best Practices
/*
- Use `let` and `const` instead of `var` to avoid issues with hoisting and block scope.
- Keep variables scoped as tightly as possible to improve readability and maintainability.
- Understand lexical scoping to utilize closures effectively.
*/

// ===========================================================
// Summary
/*
- Global Scope: Accessible throughout the code.
- Function Scope: Accessible only within the function.
- Block Scope: Accessible only within a block for `let` and `const`.
- Lexical Scope: Functions have access to variables in their outer scope.
- Scope Chain: JavaScript searches for variables in the current scope and moves outward if not found.
- Closures: Functions retain access to their outer scope, even after the outer function executes.
- Variable Hoisting: `var` is hoisted but not initialized; `let` and `const` are hoisted but remain in the temporal dead zone.
*/
