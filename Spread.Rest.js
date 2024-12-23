/*

The spread (`...`) and rest (`...`) operators are versatile tools in JavaScript for working with arrays, objects, and functions. While they use the same syntax (`...`), their behavior depends on the context in which they are used.

*/

// 1. Spread Operator (`...`)
// The spread operator is used to "spread" elements of an array or object into another array, object, or function arguments.

// 1.1 Spread with Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Merging arrays
const mergedArray = [...array1, ...array2];
console.log("Merged Array:", mergedArray);

// Copying an array (shallow copy)
const copiedArray = [...array1];
copiedArray.push(10);
console.log("Original Array:", array1);
console.log("Copied Array:", copiedArray);

// ===========================================================
// 1.2 Spread with Objects
const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "New York", country: "USA" };

// Merging objects
const mergedObject = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObject);

// Copying an object (shallow copy)
const copiedObject = { ...obj1 };
copiedObject.age = 30;
console.log("Original Object:", obj1);
console.log("Copied Object:", copiedObject);

// ===========================================================
// 1.3 Spread in Function Calls
const numbers = [10, 20, 30];

// Spreading an array into function arguments
function sum(a, b, c) {
  return a + b + c;
}
console.log("Sum:", sum(...numbers));

// ===========================================================
// 2. Rest Operator (`...`)
// The rest operator is used to collect multiple elements into an array or object.

// 2.1 Rest in Function Parameters
function restExample(first, second, ...rest) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", rest);
}

restExample(1, 2, 3, 4, 5); // Rest collects [3, 4, 5]

// ===========================================================
// 2.2 Rest with Array Destructuring
const [x, y, ...remaining] = [1, 2, 3, 4, 5];
console.log("x:", x); // 1
console.log("y:", y); // 2
console.log("Remaining:", remaining); // [3, 4, 5]

// ===========================================================
// 2.3 Rest with Object Destructuring
const { name, ...otherDetails } = { name: "Alice", age: 25, city: "New York" };
console.log("Name:", name);
console.log("Other Details:", otherDetails); // { age: 25, city: "New York" }

// ===========================================================
// 3. Combining Spread and Rest
// Spread and rest operators can work together effectively.
function combineAndLog(a, b, ...rest) {
  const combined = [a, b, ...rest];
  console.log("Combined Array:", combined);
}
combineAndLog(1, 2, 3, 4, 5);

// ===========================================================
// 4. Key Points and Best Practices
/*
- Spread (`...`) is used for unpacking elements into arrays, objects, or function arguments.
- Rest (`...`) is used for collecting elements into arrays or objects.
- Both operators work with shallow copies; nested structures are not deeply cloned.
- Use spread for immutably updating arrays and objects.
- Be cautious when using spread/rest with large arrays or objects as they can impact performance.
*/

// ===========================================================
// Summary
/*
- Spread Operator (`...`):
  - Used for unpacking elements.
  - Works with arrays, objects, and function arguments.

- Rest Operator (`...`):
  - Used for collecting elements.
  - Commonly used in function parameters and destructuring.

Understanding these operators is essential for writing clean and concise JavaScript code.
*/
