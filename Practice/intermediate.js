/***** NUMBER VARIABLES *****/

// Write a code snippet to calculate the factorial of a given number. Declare a variable num and assign it a positive integer value. Calculate the factorial of num and store the result in a variable called factorial. The factorial of a number is the product of all positive integers less than or equal to that number, i.e. 5 = 1 * 2 * 3 * 4 * 5
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
function evenOrOdd() {
    var num = 2;
    if (num % 2 === 0) {
        isEven = true;
    }
    else {
        isEven = false;
    }
}

console.log(evenOrOdd());

// Write a code snippet to calculate the sum of all even numbers from 1 to 100. Declare a variable sum and initialize it to 0. Use a loop to iterate through all numbers from 1 to 100. If a number is even, add it to the sum variable. Finally, output the value of sum.

// Write a code snippet to generate the Fibonacci sequence up to a given number of terms. Declare a variable numTerms and assign it a positive integer value. Generate the Fibonacci sequence up to numTerms and store the numbers in an array called fibonacciSeq. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two previous numbers.

// Write a code snippet to round a decimal number to the nearest integer. Declare a variable decimal and assign it a decimal value. Round the decimal to the nearest integer and store the result in a variable called roundedValue.

/***** STRING VARIABLES *****/

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