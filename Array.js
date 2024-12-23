// Declaring an Array
// An array is a special variable, which can hold more than one value at a time.
var arr = [];

// Initializing an Array
arr = ["Apple", "Banana", "Mango"];
console.log(typeof(arr)); // Output: 'object'

// Accessing elements with the help of index
// Arrays are zero-indexed, meaning the first element is at index 0.
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Output: Apple, Banana, Mango
}

// Arrays are objects too
// We can use various built-in methods to manipulate arrays.
arr.push("Pineapple"); // Adds "Pineapple" to the end of the array
console.log(arr); // Output: ["Apple", "Banana", "Mango", "Pineapple"]

arr.pop(); // Removes the last element from the array
console.log(arr); // Output: ["Apple", "Banana", "Mango"]

// Other useful Array methods
// Adding and removing elements from the beginning of the array
arr.unshift("Strawberry"); // Adds "Strawberry" to the beginning
console.log(arr); // Output: ["Strawberry", "Apple", "Banana", "Mango"]

arr.shift(); // Removes the first element
console.log(arr); // Output: ["Apple", "Banana", "Mango"]

// Finding the index of an element
var index = arr.indexOf("Banana");
console.log(index); // Output: 1

// Removing an element by index
arr.splice(index, 1); // Removes 1 element at index 1
console.log(arr); // Output: ["Apple", "Mango"]

// Slicing an array (creates a new array)
var newArray = arr.slice(0, 1); // Extracts elements from index 0 to 1 (excluding 1)
console.log(newArray); // Output: ["Apple"]

// Concatenating arrays
var moreFruits = ["Peach", "Orange"];
var combinedArray = arr.concat(moreFruits);
console.log(combinedArray); // Output: ["Apple", "Mango", "Peach", "Orange"]

// Iterating with forEach (modern method)
combinedArray.forEach(function(fruit) {
    console.log(fruit);
});

// Mapping an array (creates a new array with modified elements)
var uppercasedFruits = combinedArray.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(uppercasedFruits); // Output: ["APPLE", "MANGO", "PEACH", "ORANGE"]

// Filtering an array
var filteredFruits = combinedArray.filter(function(fruit) {
    return fruit.startsWith("P");
});
console.log(filteredFruits); // Output: ["Peach"]

// Checking if an array includes a specific element
var hasMango = combinedArray.includes("Mango");
console.log(hasMango); // Output: true

// Sorting an array
combinedArray.sort();
console.log(combinedArray); // Output: ["Apple", "Mango", "Orange", "Peach"]

// Reversing an array
combinedArray.reverse();
console.log(combinedArray); // Output: ["Peach", "Orange", "Mango", "Apple"]

// Reducing an array to a single value
var totalLength = combinedArray.reduce(function(accumulator, fruit) {
    return accumulator + fruit.length;
}, 0);
console.log(totalLength); // Output: Total length of all strings in the array

// Creating multidimensional arrays
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6 (row 1, column 2)

// Practical use of arrays
// Example: Storing and manipulating student names
var students = ["Alice", "Bob", "Charlie"];
students.push("David");
console.log(students); // Output: ["Alice", "Bob", "Charlie", "David"]
students.sort();
console.log(students); // Output: ["Alice", "Bob", "Charlie", "David"]

// Summary:
// Arrays are powerful tools in JavaScript for storing and manipulating data collections.
// Mastering their methods allows efficient and clean handling of complex operations.
