/*
    Variables & Data Types by ChatGPT
    May 13, 2023

*/

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
let power = Math.pow(2, 3);   // 8

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

/* Array is a list-like object used to store multiple values and various data types in a single variable */

// An array of fruits with 3 elements
const fruits = ["apple", "banana", "orange"];

// Access each element of an array starting at zero
console.log(fruits[0]); // access first element in array, i.e. apple

// Modify value of an element by assigning a new value to a specific index
fruits[1] = "grape"; // replace banana with grape
console.log(fruits); // apple, grape, orange

// Length property that gives you the number of elements in the array
console.log(fruits.length);   // 3

// Add elements to the end of an array using push() method
fruits.push("mango");
console.log(fruits); // apple, grape, orange, mango

// Remove the last element using pop() method
fruits.pop();
console.log(fruits); // apple, grape, orange

/* Object */

/* Null */

/* Undefined */