// 1. Declaring an Object
// An object is a collection of key-value pairs.
var car = {}; // Empty object declaration

// Assigning properties to the object
car.health = 100;
car.type = "Sedan";
car.model = "Phantom";
car.maker = "Rolls-Royce";
car.cost = 70000000;

// Checking the value of the object
console.log("Car Object:", car);

// ===========================================================
// 2. Alternate Method of Declaring an Object
// We can declare and initialize an object directly.
var bike = {
  maker: "Yamaha",
  health: 100
};

// Adding properties dynamically
bike["cost"] = 800000;

// Checking the value of the object
console.log("Bike Object:", bike);

// ===========================================================
// 3. Accessing Object Properties
// Object properties can be accessed using dot notation or bracket notation.
console.log("Bike Maker (dot notation):", bike.maker); // Using dot notation
console.log("Bike Maker (bracket notation):", bike["maker"]); // Using bracket notation

// ===========================================================
// 4. Adding Methods to an Object
// A function can be added as a property of an object. This is called a method.
bike.turnkey = function() {
  console.log("Bike is Running");
};

// Checking the updated object
console.log("Bike Object with Method:", bike);

// Calling the method
bike.turnkey();

// ===========================================================
// 5. Nested Objects
// An object can contain another object as a property.
car.engine = {
  horsepower: 450,
  type: "V8"
};

// Accessing properties of a nested object
console.log("Car Engine Type:", car.engine.type);
console.log("Car Engine Horsepower:", car.engine.horsepower);

// ===========================================================
// 6. Looping through Object Properties
// Use a `for...in` loop to iterate over the properties of an object.
console.log("Looping through Bike properties:");
for (var key in bike) {
  console.log(`${key}: ${bike[key]}`);
}

// ===========================================================
// 7. Checking for Properties
// Use the `in` operator to check if a property exists in an object.
console.log("Does bike have a 'maker' property?", "maker" in bike);
console.log("Does bike have a 'color' property?", "color" in bike);

// ===========================================================
// 8. Deleting Properties
// Use the `delete` operator to remove a property from an object.
delete bike.health;
console.log("Bike after deleting health property:", bike);

// ===========================================================
// 9. Object Methods
// JavaScript provides several built-in methods to work with objects.

// Object.keys() - Returns an array of the object's keys
console.log("Keys of Car:", Object.keys(car));

// Object.values() - Returns an array of the object's values
console.log("Values of Car:", Object.values(car));

// Object.entries() - Returns an array of key-value pairs
console.log("Entries of Car:", Object.entries(car));


// ===========================================================
// 10. Summary
// - Objects are collections of key-value pairs.
// - Properties can be added, accessed, modified, or deleted dynamically.
// - Methods are functions stored as properties of objects.
// - Nested objects allow for hierarchical data structures.
// - Built-in object methods simplify operations like accessing keys, values, and entries.
