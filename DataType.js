/*
Seven Primitive DataTypes in JavaScript:

1. String:
   - Represents text data.
   - Enclosed in single quotes (' '), double quotes (" "), or template literals (` `).
   Example:
   let text = "Hello, World!";
   console.log(typeof text); // Output: 'string'

2. Number:
   - Represents numeric data, including integers and floating-point numbers.
   - Also includes special values like Infinity, -Infinity, and NaN.
   Example:
   let num = 42;
   console.log(typeof num); // Output: 'number'

3. Boolean:
   - Represents true/false values.
   Example:
   let isActive = true;
   console.log(typeof isActive); // Output: 'boolean'

4. Null:
   - Represents the intentional absence of a value.
   - Note: typeof null returns 'object' (a historical bug in JavaScript).
   Example:
   let value = null;
   console.log(typeof value); // Output: 'object'

5. Undefined:
   - Represents a variable that has been declared but not assigned a value.
   Example:
   let notAssigned;
   console.log(typeof notAssigned); // Output: 'undefined'

6. BigInt:
   - Used for integers that exceed the safe integer limit (2^53 - 1).
   - Created by appending 'n' to the end of an integer or using BigInt() constructor.
   Example:
   let bigNumber = 123456789012345678901234567890n;
   console.log(typeof bigNumber); // Output: 'bigint'

7. Symbol:
   - Represents a unique identifier.
   - Often used to create unique property keys for objects.
   Example:
   let sym = Symbol("description");
   console.log(typeof sym); // Output: 'symbol'
*/
