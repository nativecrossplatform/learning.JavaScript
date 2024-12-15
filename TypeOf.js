// typeof is an operator
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof true:", typeof true);
console.log("typeof 42:", typeof 42);
console.log("typeof 'Hello':", typeof "Hello");
console.log("typeof Symbol('example'):", typeof Symbol("example"));
console.log("typeof function() {}:", typeof function () {});
console.log("typeof []:", typeof []);
console.log("typeof {}:", typeof {});
console.log("typeof /regex/:", typeof /regex/);
console.log("typeof new Date():", typeof new Date());
console.log("typeof BigInt(123):", typeof BigInt(123));
// even statements can passed to type of to 