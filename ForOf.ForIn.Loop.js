// FOR...OF AND FOR...IN LOOPS IN JAVASCRIPT

// FOR...OF LOOP
/*
The `for...of` loop iterates over iterable objects such as arrays, strings, maps, sets, and more.
It provides the value of each element in the iterable.
*/

// Example 1: Iterating through an Array
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Prints each fruit: "Apple", "Banana", "Cherry"
}

// Example 2: Iterating through a String
let message = "Hello";
for (let char of message) {
    console.log(char); // Prints each character: 'H', 'e', 'l', 'l', 'o'
}

// Example 3: Iterating through a Set
let uniqueNumbers = new Set([1, 2, 3, 3]);
for (let number of uniqueNumbers) {
    console.log(number); // Prints unique numbers: 1, 2, 3
}

// Example 4: Iterating through a Map
let userMap = new Map([
    ["name", "John"],
    ["age", 25],
    ["country", "USA"]
]);
for (let [key, value] of userMap) {
    console.log(`${key}: ${value}`); // Prints key-value pairs: "name: John", "age: 25", "country: USA"
}

// FOR...IN LOOP
/*
The `for...in` loop iterates over the enumerable properties of an object.
It provides the keys (property names) of the object.
*/

// Example 1: Iterating through an Object
let user = {
    name: "Alice",
    age: 30,
    profession: "Engineer"
};
for (let key in user) {
    console.log(`${key}: ${user[key]}`); // Prints "name: Alice", "age: 30", "profession: Engineer"
}

// Example 2: Iterating through an Array (not recommended for arrays)
let numbers = [10, 20, 30];
for (let index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
    // Prints indices and values: "Index: 0, Value: 10", "Index: 1, Value: 20", "Index: 2, Value: 30"
}
/*
Note: Use `for...of` for arrays when the focus is on values.
Use `for...in` for arrays only when you specifically need the indices.
*/

// Example 3: Using `for...in` with inherited properties
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    console.log("Hello!");
};
let person = new Person("Bob", 40);
for (let key in person) {
    console.log(key); // Prints "name", "age", "greet" (including inherited properties)
}
/*
To exclude inherited properties, use `Object.hasOwnProperty()`.
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key); // Only prints "name" and "age"
    }
}
*/

// Summary:
/*
- Use `for...of` for iterating over iterable objects like arrays, strings, maps, and sets.
- Use `for...in` for iterating over the properties of objects.
- Avoid using `for...in` for arrays unless you need the indices.
- Be mindful of inherited properties when using `for...in`.
*/
