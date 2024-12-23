// JavaScript Math Methods Tutorial

// 1. Random Number Generation
console.log("Random Number:");
console.log(Math.random()); // Generates a random number between 0 and 0.99

// 2. Constants
console.log("Math Constants:");
console.log("PI:", Math.PI); // Ratio of a circle's circumference to its diameter
console.log("E:", Math.E); // Euler's constant, base of natural logs
console.log("LN2:", Math.LN2); // Natural log of 2
console.log("LN10:", Math.LN10); // Natural log of 10

// 3. Rounding Methods
console.log("Rounding Methods:");
console.log("Ceil (round up):", Math.ceil(10.4)); // Rounds 10.4 to 11
console.log("Floor (round down):", Math.floor(10.4)); // Rounds 10.4 to 10
console.log("Round (nearest):", Math.round(10.5)); // Rounds 10.5 to 11
console.log("Trunc (remove decimals):", Math.trunc(10.9)); // Removes decimal part, outputs 10

// 4. Arithmetic and Calculus
console.log("Arithmetic and Calculus:");
console.log("Power (2^4):", Math.pow(2, 4)); // 2 to the power of 4
console.log("Square Root (sqrt of 25):", Math.sqrt(25)); // Square root of 25
console.log("Cube Root (cbrt of 27):", Math.cbrt(27)); // Cube root of 27
console.log("Absolute Value (|-10|):", Math.abs(-10)); // Converts negative to positive

// 5. Trigonometric Functions
console.log("Trigonometric Functions:");
console.log("Sin(PI/2):", Math.sin(Math.PI / 2)); // Sine of 90 degrees
console.log("Cos(0):", Math.cos(0)); // Cosine of 0 degrees
console.log("Tan(PI/4):", Math.tan(Math.PI / 4)); // Tangent of 45 degrees

// 6. Logarithmic Functions
console.log("Logarithmic Functions:");
console.log("Natural Log (ln of e):", Math.log(Math.E)); // Logarithm base e of e
console.log("Log Base 2 (log2 of 8):", Math.log2(8)); // Logarithm base 2 of 8
console.log("Log Base 10 (log10 of 100):", Math.log10(100)); // Logarithm base 10 of 100

// 7. Min and Max
console.log("Min and Max:");
console.log("Min of (1, 3, -5):", Math.min(1, 3, -5)); // Finds the smallest value
console.log("Max of (1, 3, -5):", Math.max(1, 3, -5)); // Finds the largest value

// 8. Random Integers Between a Range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random Integer (1 to 10):", getRandomInt(1, 10)); // Random integer between 1 and 10
