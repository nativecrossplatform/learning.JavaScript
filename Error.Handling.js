// TRY AND CATCH IN JAVASCRIPT

// Basic Example of Try and Catch
/*
The try block contains code that may throw an error.
The catch block handles the error if one occurs.
*/
try {
    console.log(c + d); // This will throw an error because 'c' and 'd' are not defined
    console.log("YAY"); // This line will not execute because an error occurred earlier
} catch (error) {
    console.log("NAY " + error); // Handles the error and prints the error message
}

// THROWING ERRORS
/*
You can use the `throw` statement to create and throw your own custom errors.
*/
var name = 'JASH1';
try {
    if (name != 'JASH') {
        throw new ReferenceError(); // Throwing a ReferenceError if condition is met
    }
} catch (error) {
    console.log(error); // Logs the error object
}

// CREATING CUSTOM ERRORS
/*
You can create custom error classes by extending the built-in `Error` class.
*/
class CustomError extends Error {
    constructor(message) {
        super(message); // Pass the message to the parent Error class
        this.name = "CustomError"; // Set a custom name for the error
    }
}

// Example of throwing a custom error
try {
    throw new CustomError("This is a custom error!"); // Creating and throwing a custom error
} catch (error) {
    console.log(error.name + ": " + error.message); // Logs the custom error name and message
}

// THROWING ERRORS WITH ARBITRARY VALUES
/*
You can throw any type of value as an error, including strings, objects, and numbers.
*/
try {
    throw "This is a string error!"; // Throwing a string
} catch (error) {
    console.log("String Error: " + error);
}

try {
    throw { code: 404, message: "Not Found" }; // Throwing an object
} catch (error) {
    console.log("Object Error: Code - " + error.code + ", Message - " + error.message);
}

try {
    throw 42; // Throwing a number
} catch (error) {
    console.log("Number Error: " + error);
}

// BEST PRACTICES
/*
1. Use specific error types to make debugging easier (e.g., ReferenceError, TypeError).
2. Avoid using generic error messages; provide clear and actionable messages.
3. Clean up resources in the finally block if needed (not covered here but useful for advanced scenarios).
*/
