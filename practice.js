/***** NUMBER VARIABLES *****/

// Declare a variable num1 and assign it the value 5. Declare another variable num2 and assign it the value 7. Write a code snippet to calculate the sum of num1 and num2 and store the result in a variable called sum.
let num1 = 5;
let num2 = 7;
let sum = num1 + num2;

// Declare a variable radius and assign it a value of 10. Write a code snippet to calculate the circumference of a circle with the given radius and store the result in a variable called circumference. Assume the value of π (pi) to be 3.14159. C = 2πr
function findCircumference() {
    let radius = 10;
    let circumference = 2 * 3.14159 * radius;
    return circumference; // 62.8318
}

console.log(findCircumference());

// Write a code snippet to convert a temperature in Celsius to Fahrenheit. Declare a variable celsius and assign it a value. Calculate the corresponding temperature in Fahrenheit and store it in a variable called fahrenheit. The conversion formula is: fahrenheit = celsius * 9/5 + 32.
function toFahrenheit() {
    let celsius = 54;
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit; // 129.2
}

console.log(toFahrenheit());

// Declare a variable price and assign it a value. Write a code snippet to calculate the final price after applying a discount of 20%. Store the result in a variable called finalPrice.
function finalPrice() {
    let price = 20;
    let finalPrice = price - price * .20;
    return finalPrice;
}

console.log(finalPrice());

// Write a code snippet to find the largest number among three given numbers. Declare three variables num1, num2, and num3, and assign them different values. Find the largest number among them and store it in a variable called largestNumber.
let firstNum = 10;
let secNum = 25;
let thirdNum = 15;

let largestNumber = Math.max(firstNum, secNum, thirdNum);

console.log(largestNumber);

// Write a code snippet to calculate the factorial of a given number. Declare a variable num and assign it a positive integer value. Calculate the factorial of num and store the result in a variable called factorial. The factorial of a number is the product of all positive integers less than or equal to that number.
function calculateFactorial() {
    let num = 5;
    let factorial = 1;

    for (let i = 1; i <= num; i++) {    // i = 1 to start on 1 instead of 0 (i = 0), if you start on 0 then try to multiply it will result in error
        factorial *= i;     // factorial = factorial * i;
    }

    return factorial; // 120
}

console.log(calculateFactorial());

// Write a code snippet to check if a given number is even or odd. Declare a variable num and assign it a value. Use an if-else statement to determine if the number is even or odd, and store the result in a variable called isEven. The variable should be true if the number is even and false if it is odd.


// Write a code snippet to calculate the sum of all even numbers from 1 to 100. Declare a variable sum and initialize it to 0. Use a loop to iterate through all numbers from 1 to 100. If a number is even, add it to the sum variable. Finally, output the value of sum.

// Write a code snippet to generate the Fibonacci sequence up to a given number of terms. Declare a variable numTerms and assign it a positive integer value. Generate the Fibonacci sequence up to numTerms and store the numbers in an array called fibonacciSeq. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous numbers.

// Write a code snippet to round a decimal number to the nearest integer. Declare a variable decimal and assign it a decimal value. Round the decimal to the nearest integer and store the result in a variable called roundedValue.

/***** STRING VARIABLES *****/

// Declare a variable name and assign it your name as a string. Print out the value of name to the console.
let name = "Amber";
console.log(name);

// Declare a variable message and assign it a string that says "Hello, World!". Print out the value of message to the console.
let message = "Hello, World!";
console.log(message);

// Declare a variable sentence and assign it a string that contains multiple words. Write a code snippet to count the number of words in the sentence and store the result in a variable called wordCount.
var sentence = "This is a sample sentence.";
var words = sentence.trim().split(" "); // remove leading/trailing spaces and split the sentence into an array of words
var wordCount = words.length;   // count the number of words in the array
console.log(wordCount);

// Declare a variable fullName and assign it your full name as a string. Write a code snippet to extract your last name from fullName and store it in a variable called lastName.
let fullName = "Mishka Riot";
let nameArray = fullName.split(" ");    // split the fullName string into an array of words
let lastName = nameArray(nameArray.length - 1); // get the last element of the nameArray which is the last name

console.log(lastName);

// Declare a variable text and assign it a long string of text. Write a code snippet to check if the string contains the word "JavaScript". Store the result (true or false) in a variable called containsJavaScript.

// Declare a variable email and assign it an email address as a string. Write a code snippet to check if the email address is valid. Store the result (true or false) in a variable called isValidEmail. Consider valid email addresses to have the format "name@example.com".

// Declare a variable input and assign it a string. Write a code snippet to convert the string to uppercase and store the result in a variable called uppercaseInput.

/* Declare a variable password and assign it a string representing a password. Write a code snippet to check if the password meets the following criteria:
- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one digit
- Store the result (true or false) in a variable called isStrongPassword.
Declare a variable sentence and assign it a string that contains multiple sentences. Write a code snippet to split the sentence into an array of individual sentences. Store the result in a variable called sentencesArray. */

// Declare a variable input and assign it a string. Write a code snippet to remove all spaces from the input string and store the result in a variable called trimmedInput.