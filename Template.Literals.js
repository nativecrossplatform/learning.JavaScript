/*
Template literals, introduced in ES6 (ECMAScript 2015), are a powerful way to work with strings in JavaScript. They enhance string manipulation by providing features like interpolation, multi-line strings, and embedded expressions.
*/

// ===========================================================
// 1. Creating Template Literals
// Template literals are enclosed by backticks (`) instead of single or double quotes.
const basicLiteral = `Hello, World!`;
console.log(basicLiteral);

// ===========================================================
// 2. String Interpolation
// Template literals allow embedding expressions directly into strings using the `${}` syntax.
const name = "Alice";
const age = 30;
const greeting = `My name is ${name}, and I am ${age} years old.`;
console.log(greeting);

// Expressions can include function calls, calculations, or other variables.
const x = 10;
const y = 20;
const sum = `The sum of ${x} and ${y} is ${x + y}.`;
console.log(sum);

// ===========================================================
// 3. Multi-line Strings
// Template literals preserve line breaks, making them ideal for multi-line strings.
const multiLineString = `This is a multi-line string.
It spans multiple lines without the need for escape characters.`;
console.log(multiLineString);

// ===========================================================
// 4. Embedding Expressions and Functions
// Template literals can embed any valid JavaScript expression.
function getGreeting(name) {
  return `Hello, ${name}!`;
}
const dynamicGreeting = `${getGreeting("Bob")}`;
console.log(dynamicGreeting);

// Nested expressions are also supported.
const nestedTemplate = `Result of 5 * (3 + 2): ${5 * (3 + 2)}`;
console.log(nestedTemplate);

// ===========================================================
// 5. Tagged Templates
// Tagged templates allow custom processing of template literals using functions.
function tagExample(strings, ...values) {
  console.log("Strings:", strings);
  console.log("Values:", values);
  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const tagged = tagExample`My name is ${name}, and I am ${age} years old.`;
console.log("Tagged Template Output:", tagged);

// ===========================================================
// 6. Escaping Backticks
// Use a backslash (\) to include a backtick character in a template literal.
const backtickExample = `This is a \`backtick\` inside a template literal.`;
console.log(backtickExample);

// ===========================================================
// 7. Practical Examples

// 7.1 Dynamic HTML with Template Literals
const title = "Template Literals";
const body = "Template literals are useful for generating dynamic content.";
const html = `
  <article>
    <h1>${title}</h1>
    <p>${body}</p>
  </article>
`;
console.log(html);

// 7.2 Logging Multi-line Messages
const errorMessage = `
Error: Something went wrong.
Please try again later or contact support.
`;
console.log(errorMessage);
// ===========================================================
// 8. Key Points and Best Practices
/*
- Use template literals for better readability and cleaner string concatenation.
- Prefer template literals for multi-line strings to avoid escape characters.
- When embedding expressions, ensure their output is what you expect (e.g., avoid undefined values).
- Utilize tagged templates for advanced string manipulation or sanitization.
*/
