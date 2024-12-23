// LOOPS IN JAVASCRIPT

// FOR LOOP
/*
The `for` loop is used to execute a block of code a specific number of times.
Syntax:
for (initialization; condition; increment/decrement) {
    // Code to execute
}
*/
for (var i = 0; i <= 10; i++) {
    console.log(i); // Outputs numbers from 0 to 10
}

// WHILE LOOP
/*
The `while` loop executes a block of code as long as the condition evaluates to true.
Syntax:
while (condition) {
    // Code to execute
}
*/
var i = 10;
while (i > 0) {
    console.log(i); // Outputs numbers from 10 to 1
    i--;
}

// DO-WHILE LOOP
/*
The `do-while` loop is similar to the `while` loop, except that it will execute the code block once before checking the condition.
Syntax:
do {
    // Code to execute
} while (condition);
*/
var j = 1;
do {
    console.log(j); // Outputs numbers from 1 to 5
    j++;
} while (j <= 5);

// NESTED LOOPS
/*
A loop inside another loop is called a nested loop.
Each iteration of the outer loop triggers a full cycle of the inner loop.
*/
for (var row = 1; row <= 3; row++) {
    console.log(`Row ${row}`);
    for (var col = 1; col <= 3; col++) {
        console.log(`  Column ${col}`); // Outputs "Row x Column y"
    }
}

// FOR...OF LOOP
/*
The `for...of` loop iterates over iterable objects like arrays, strings, or sets.
Syntax:
for (variable of iterable) {
    // Code to execute
}
*/
let numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num); // Outputs 10, 20, 30
}

// FOR...IN LOOP
/*
The `for...in` loop iterates over the enumerable properties of an object.
Syntax:
for (key in object) {
    // Code to execute
}
*/
let student = {
    name: "Raj",
    age: 20,
    grade: "A"
};
for (let key in student) {
    console.log(`${key}: ${student[key]}`); // Outputs "name: Raj", "age: 20", "grade: A"
}

// CONTINUE STATEMENT
/*
The `continue` statement skips the current iteration of the loop and jumps to the next iteration.
*/
for (var k = 1; k <= 5; k++) {
    if (k === 3) continue; // Skips when k equals 3
    console.log(k); // Outputs 1, 2, 4, 5
}

// BREAK STATEMENT
/*
The `break` statement exits the loop entirely when executed.
*/
for (var l = 1; l <= 5; l++) {
    if (l === 4) break; // Exits when l equals 4
    console.log(l); // Outputs 1, 2, 3
}

// INFINITE LOOPS
/*
Loops can run indefinitely if the condition never becomes false.
Avoid these as they can crash your program or browser.
Example:
while (true) {
    console.log("This will run forever!");
}
*/

// Summary:
/*
- Use `for`, `while`, or `do-while` loops depending on the use case.
- `for...of` is for iterables; `for...in` is for objects.
- Control the flow of loops using `break` and `continue`.
- Avoid infinite loops by ensuring conditions are correct.
*/