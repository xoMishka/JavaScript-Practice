/*
    Variables & Data Types by ChatGPT
    May 13, 2023

*/

// VARIABLES

// Var

// Let

// Const

// DATA TYPES

/* Number variable represents numeric values and can store INTEGERS and FLOATING-POINT numbers */

// Assign a numeric value directly to a variable using numeric literals
let x = 42; // Integer
let y = 3.14 // Floating-point

// Arithmetic operations
let sum = 4 + 2; // 6
let difference = 5 - 4; // 1
let product = 4 * 5; // 20
let quotient = 10 / 2; // 5

// Mathematical functions
// Calculates the square root of a number
let squareRoot = Math.sqrt(16); // 4
// Raises a number to a specific power, i.e. 2^3 or 2*2*2
let power = Math.pow(2, 3); // 8

// NaN (Not-a-Number) is a special value that represents an unrepresentable/undefined value resulting from an invalid mathematical oepration but not equivalent to any other number including itself
let result = 0 / 0; // NaN
console.log(result === NaN); // false
console.log(isNan(result)); // true

// Built in functions that can convert numbers
let stringValue = "42";
let intValue = parseInt(stringValue); // 42
let floatValue = parseFloat("3.14"); // 3.14

// Built in methods that can be used to perform operations or obtain information about the number
let num = 3.14159;
console.log(num.toFixed(2)); // 3.14
console.log(num.toPrecision(3)); 3.14
console.log(num.toString()); // 3.14159

/* String variable is used to represent textual data and is a sequence of characters enclosed in single or double quotes. Strings values can't be changed once they're created */

// String literals
let message = "Hello, world!";
let name = 'John Doe';

// Concatenate strings using the '+' operator which allows you to combine multiple strings into a single string
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// Length property of a string returns the number of characters in a string
let greeting = "Hello!";
console.log(greeting.length); // 6

// Access individual characters in a string using square brackest ('[]') and the character index position (zero-based index)
let string = "Hello";
console.log([0]); // H
console.log([1]); // e
console.log([2]); // l

// Built in methods for manipulating and working with strings
let greet = "Hello, world!";
console.log(greet.toUpperCase()); // HELLO, WORLD!
console.log(greet.substring(0, 5)); // Hello
console.log(greet.split(", ")); // Hello, world!
console.log(greet.indexOf("world")); // 7
console.log(greet.replace("world", "John")); // Hello, John!

// Certain characters have special meanings in strings such as quotes and line breaks. To include these characters in a string you can use escape characters ('\')
let example = "She said, \"Hello!\"";
let newLine = "This is a \nnew line.";

// Template literals support embedding expressions within strings using '${expression}'
let guy = "John";
let flirt = 'Hello, ${name}!'; // Hello, John!

// Strings are immutable, meaning you can't change individual characters in an existing string. You need to create a new string with the desired modifications
let str = "Hello";
let newStr = str + ", world!"; // Hello, world!


/* Boolean variable is used to represent logical values and can have one of two possible values: true or false. Booleans are used in conditional statements to control the flow of a program */

// Boolean literals
let isTrue = true;
let isFalse = false;

/* 
Comparison Operators
    === strict equality
    !== strict inequality
    > < <= >=
Logical Operators
    && logical AND
    || logical OR
    ! logical NOT
*/



/* Array */

/* Object */

/* Null */

/* Undefined */



/*

In JavaScript, `let`, `var`, and `const` are used to declare variables, but they have some differences in terms of scope, hoisting, and reassignment. Here's a breakdown of the differences:

1. Scope:
   - `let`: Variables declared with `let` have block scope. They are limited to the block in which they are defined, such as within a function or a statement block enclosed by curly braces `{}`.
   - `var`: Variables declared with `var` have function scope or global scope. They are accessible throughout the entire function in which they are declared or, if declared outside any function, they become global variables accessible throughout the entire JavaScript environment.
   - `const`: Variables declared with `const` also have block scope like `let`, but they are constants and their values cannot be reassigned once defined.

2. Hoisting:
   - `let` and `const`: Variables declared with `let` or `const` are hoisted to the top of their block scope but are not initialized. This means you cannot access them before the line where they are declared.
   - `var`: Variables declared with `var` are hoisted to the top of their function scope or global scope and are initialized with the value `undefined`. This allows you to access them before the line where they are declared, although their value will be `undefined` until assigned a different value.

3. Reassignment:
   - `let`: Variables declared with `let` can be reassigned to a new value.
   - `var`: Variables declared with `var` can be reassigned to a new value.
   - `const`: Variables declared with `const` are constants and cannot be reassigned once defined. However, if the variable holds a reference to an object or an array, the properties or elements of the object or array can still be modified.

4. Temporal Dead Zone (TDZ):
   - `let` and `const`: Variables declared with `let` or `const` are subject to the Temporal Dead Zone (TDZ). This means that accessing these variables before they are declared in the current block scope will result in a `ReferenceError`.
   - `var`: Variables declared with `var` do not have a temporal dead zone. They can be accessed and will have the value `undefined` until they are assigned a different value.

In general, it is recommended to use `let` for variables that need to be reassigned, `const` for variables that should not be reassigned, and to avoid using `var` in modern JavaScript development, as it has some behavior that can lead to unexpected results and makes it harder to maintain code.

Here's an example that demonstrates the differences:

function example() {
  console.log(x); // undefined (hoisted)
  console.log(y); // ReferenceError: y is not defined (TDZ)
  console.log(z); // ReferenceError: z is not defined (TDZ)
  
  var x = 1;
  let y = 2;
  const z = 3;

  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
  }

  console.log(x); // 10 (reassigned)
  console.log(y); // 2 (block scope)
  console.log(z); // 3 (block scope)

  x = 100;
  // y = 200; // Error: Assignment to constant variable
  console.log(x); // 100 (reassigned)
}

*/