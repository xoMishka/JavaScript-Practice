/***** NUMBER VARIABLES *****/

// Declare a variable num1 and assign it the value 5. Declare another variable num2 and assign it the value 7. Write a code snippet to calculate the sum of num1 and num2 and store the result in a variable called sum.
function sum() {
    let num1 = 5;
    let num2 = 7;
    let sum = num1 + num2;
    return sum;
}

console.log(sum());


// Declare a variable radius and assign it a value of 10. Write a code snippet to calculate the circumference of a circle with the given radius and store the result in a variable called circumference. Assume the value of π (pi) to be 3.14159. C = 2πr
function circumference() {
    let radius = 10;
    let pi = 3.14159;
    let circumference = 2 * pi * radius;
    return circumference;
}

console.log(circumference());

// Write a code snippet to convert a temperature in Celsius to Fahrenheit. Declare a variable celsius and assign it a value. Calculate the corresponding temperature in Fahrenheit and store it in a variable called fahrenheit. The conversion formula is: fahrenheit = celsius * 9/5 + 32.
function toFahrenheit() {
    let celsius = 2;
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

console.log(toFahrenheit());

// Declare a variable price and assign it a value. Write a code snippet to calculate the final price after applying a discount of 20%. Store the result in a variable called finalPrice.
function finalPrice() {
    let price = 20;
    let discount = .20;
    let finalPrice = price - price * discount;
    return finalPrice;
}

console.log(finalPrice());

// Write a code snippet to find the largest number among three given numbers. Declare three variables num1, num2, and num3, and assign them different values. Find the largest number among them and store it in a variable called largestNumber.
function largestNumber() {
    let num1 = 12;
    let num2 = 43890;
    let num3 = 19290;
    let largestNumber = Math.max(num1, num2, num3);
    return largestNumber;
}

console.log(largestNumber());

/***** STRING VARIABLES *****/

// Declare a variable name and assign it your name as a string. Print out the value of name to the console.
let name = "Mishka";
console.log(name);

// Declare a variable message and assign it a string that says "Hello, World!". Print out the value of message to the console.
let message = "Hello, World!";
console.log(message);