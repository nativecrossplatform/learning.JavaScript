// JSON FUNCTIONALITIES IN JAVASCRIPT

// WHAT IS JSON?
/*
JSON (JavaScript Object Notation) is a lightweight data-interchange format.
It is easy for humans to read and write and easy for machines to parse and generate.
*/

// PARSING JSON STRINGS INTO JAVASCRIPT OBJECTS
/*
The `JSON.parse()` method parses a JSON string and converts it into a JavaScript object.
*/
let jsonString = '{"name":"Rajesh Kumar","age":25,"skills":["Python","Data Analysis","Machine Learning"]}';
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Outputs: Rajesh Kumar
console.log(jsonObject.skills); // Outputs: ["Python", "Data Analysis", "Machine Learning"]

// CONVERTING JAVASCRIPT OBJECTS TO JSON STRINGS
/*
The `JSON.stringify()` method converts a JavaScript object or value to a JSON string.
*/
let jsObject = {
    name: "Rajesh Kumar",
    age: 25,
    skills: ["Python", "Data Analysis", "Machine Learning"]
};
let jsonStr = JSON.stringify(jsObject);
console.log(jsonStr); // Outputs: {"name":"Rajesh Kumar","age":25,"skills":["Python","Data Analysis","Machine Learning"]}

// HANDLING NESTED JSON OBJECTS
/*
JSON can handle nested structures like objects within objects or arrays within objects.
*/
let nestedJson = {
    name: "Rajesh Kumar",
    address: {
        street: "456 MG Road",
        city: "Bengaluru",
        state: "Karnataka",
        zip: "560001"
    },
    preferences: {
        theme: "light",
        notifications: false
    }
};
console.log(nestedJson.address.city); // Outputs: Bengaluru

// LOOPING THROUGH JSON DATA
/*
You can loop through JSON objects using `for...in` for objects and `for...of` for arrays.
*/
for (let key in nestedJson) {
    console.log(`${key}: ${nestedJson[key]}`);
}

// HANDLING ERRORS IN JSON OPERATIONS
/*
Use `try...catch` to handle errors during JSON parsing or stringifying.
*/
let invalidJson = '{name: Rajesh Kumar}'; // Missing double quotes around property names
try {
    let obj = JSON.parse(invalidJson);
    console.log(obj);
} catch (error) {
    console.log("Invalid JSON string: " + error.message);
}

// FILTERING JSON DATA
/*
You can filter JSON arrays using methods like `filter()` or `map()`.
*/
let jsonArray = [
    { name: "Rajesh", age: 25 },
    { name: "Anjali", age: 30 },
    { name: "Kiran", age: 22 }
];
let filtered = jsonArray.filter(person => person.age > 24);
console.log(filtered); // Outputs: [{ name: "Rajesh", age: 25 }, { name: "Anjali", age: 30 }]

// SUMMARY
/*
- JSON.parse() converts JSON strings to JavaScript objects.
- JSON.stringify() converts JavaScript objects to JSON strings.
- JSON can handle nested structures and arrays.
- Use error handling to manage invalid JSON.
- Filter and manipulate JSON data with array methods.
*/
