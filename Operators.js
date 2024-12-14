/*

Basic Operators:

-> Assignment Operator (=):
Used to assign a value to something.

-> Arithmetic operators (+, -, *, /, %, **):
+ -> Addition
(When used to combine a string and a string, the addition operator acts as a concatenation operator and joins the two strings. If used on a number and a string, it will treat the number as a string and then concatenate it. For example, 12 + "hello" will give "12hello" as output.)
- -> Subtraction
* -> Multiplication
/ -> Division
% -> Modulus (Remainder)
** -> Exponentiation (Power) (e.g., 2 ** 3 results in 8)
+= -> Addition Assignment
-= -> Subtraction Assignment
*= -> Multiplication Assignment
/= -> Division Assignment
%= -> Modulus Assignment
**= -> Exponentiation Assignment

-> Increment/Decrement Operators:
++ -> Increment (Increases the value of a variable by 1)
-- -> Decrement (Decreases the value of a variable by 1)
(Note: Can be used as prefix (++x, --x) or postfix (x++, x--), with differences in evaluation order.)

-> Comparison Operators:
(Used to compare between two entities.)
>= -> Greater than or equal to
<= -> Less than or equal to
>  -> Greater than
<  -> Less than
!= -> Not equal to
== -> Equal to
=== -> Strictly equal to
(The strict equality operator compares both the values and the data types. For example, 5 === 5 returns true. However, comparing 5 == "5" now returns false because the values are equal, but the data type is different.)
!== -> Strictly not equal to
(For the strict inequality operator to return false, the compared values have to have the same value and the same data type. For example, 5 !== 5 returns false.)

-> Logical Operators:
&& -> AND (Returns true if both operands are true.)
|| -> OR (Returns true if at least one operand is true.)
!  -> NOT (Inverts the truth value.)

-> Bitwise Operators:
& -> AND
| -> OR
^ -> XOR
~ -> NOT
<< -> Left Shift
>> -> Right Shift
>>> -> Zero-fill Right Shift

-> Type Operators:
typeof -> Returns the data type of a variable or expression. For example, typeof "hello" returns "string".
instanceof -> Checks if an object is an instance of a specific class or constructor. For example, obj instanceof Array.

-> Ternary Operator:
condition ? expr1 : expr2
(Evaluates the condition; if true, returns expr1; otherwise, returns expr2.)

*/
