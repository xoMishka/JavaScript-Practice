// FUNCTION DECLARATION SYNTAX
// The goal is to take something specific and make it general (abstract)
    // Greeting
    function greet() {
        console.log('Hello');
    }

    greet();

    // Fahrenheit to Celsius
    function toCelsius(fahrenheit) {
        return (5/9) * (fahrenheit - 32);
    }

    console.log(toCelsius(45));

    // Print an Array of Names
    function printArray(names) {
        for (let i = 0; i < names.length; i++) {
            console.log(names[i]);
        }         // loops through array with any list of names
    }

    printArray(["Amber", "Xander", "Nick"]);
    console.log("---");
    printArray(["orange", "apple", "pear"]);

    // Triple the parameter
    function triple(x) {
        return x + x + x;
    }

    console.log(triple(8));     // 24
    console.log(triple("ho"));      // ho ho ho

    // Is it even?
    function even(x) {
        return x % 2 == 0;      // x / 2 = 0
    }

    console.log(even(-8));      // true
    console.log(even(27));      // false

    // Returns whether x exactly divides y
    function divides(x, y) {
        return y % x === 0;
    }

    console.log(divides(5, 20));        // true
    console.log(divides(2, 17));        // false

    // What is half of x
    function halfOf(x) {
        return x / 2;
    }

    console.log(halfOf(-8));        // -4
    console.log(halfOf(27));        // 13.5

    // Is the string (s) longer than the given integer (n)
    function isLongerThan(s, n) {
        return s.length > n;
    }

    console.log(isLongerThan("sos", 2));        // true
    console.log(isLongerThan("sos", 3));        // false

    // What is the new sale price after the discount?
    function salePrice(originalPrice, discountPercent) {
        return originalPrice - (originalPrice * discountPercent / 100.0);
    }

    console.log(salePrice(200, 10));        // 180
    console.log(salePrice(157.95, 15));        // 134.2575
    console.log(salePrice(157.95, 100));        // 0

    // What is the area of the circle?
    function circleArea(radius) {
        return Math.PI * radius * radius;
    }

    console.log(circleArea(3));             // 28.274
    console.log(circleArea(1.492705));      // 6.9999

// Define a function called 'multiplyFive' which accepts a number and returns
// that number multiplied by 5.
    function multiplyFive(number) {
        return number * 5;
    }

    console.log(multiplyFive(5));       // 25

// https://www.teaching-materials.org/javascript/exercises/functions

/* Write a function named tellFortune that takes 4 arguments: number of children, partner's 
name, geographic location, job title. It outputs your fortune to the screen like so: 
"You will be a X in Y, and married to Z with N kids." Call that function 3 times with 
3 different values for the arguments. */
    function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
        var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to '
        + partnerName + ' ' + 'with ' + numChildren + ' kids.';
        console.log(future);
    }

    console.log(tellFortune('2', 'Xander', 'Alaska', 'Web Developer'));

/* You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that: takes 1 argument: your puppy's age, calculates 
your dog's age based on the conversion rate of 1 human year to 7 dog years, and outputs 
the result to the screen like so: "Your doggie is NN years old in dog years!" Call the 
function three times with different sets of values. Bonus: Add an additional argument to 
the function that takes the conversion rate of human to dog years. */
    function calculateDogAge(dogAge, x) {
        // dogAge

        // calculate dog age (1 human year = 7 dog years)

        // output the result: "Your doggie is x years old in dog years!"
        console.log('Your doggie is ' + x + ' years old in dog years!');
    }

    // call the function 3 times


/* Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumfrence: Pass the radius to the function. Calculate the 
circumference based on the radius, and output "The circumference is NN". Create a function 
called calcArea: Pass the radius to the function. Calculate the area based on the radius, 
and output "The area is NN". */

/* It's hot out! Let's make a converter based on the steps here. Create a function called 
celsiusToFahrenheit: Store a celsius temperature into a variable. Convert it to fahrenheit 
and output "NN°C is NN°F". Create a function called fahrenheitToCelsius: Now store a 
fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C." */


// https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

// 1. Write a function to reverse a number
    function reverseNumber(number) {
        var reverse = 0;
        while(number != 0) {
            reverse = reverse * 10;
            reverse = reverse + number % 10;
            number = Math.trunc(number / 10);   // remove decimal places
        }
        return reverse;
    }

    console.log(reverseNumber(123));    // 321
    console.log(reverseNumber(5872));       // 2785

// 2. Write a function that checks whether a passed string is a palindrome or not?
// Palindrome = word, phrase or sequence that reads the same backwards as forward
// i.e. racecar, madam, nurses run

// 3. Write a function that generates all combinations of a string
// i.e. 'dog' output 'd, do, dog, o, og, g'

// 4. Write a function that returns a passed string with letters in alphabetical order
// i.e. 'webmaster' output 'abeemrstw' assume punctuation and number symbols are
// not included in the passed string

// 5. Write a function that accepts a string as a parameter and converts the first
// letter of each word of the string in upper case
// i.e. 'the quick brown fox' output 'The Quick Brown Fox'

// 6. Write a function that accepts a string as a parameter and finds the
// longest word within the string, i.e. 'Web Development Tutorial' output 'Development'

// 7. Write a function that accepts a string as a parameter and counts the number of
// vowels within the string, do not include y as a vowel, i.e. 'The quick brown fox'
// output = 5

// 8. Write a function that accepts a number as a parameter and check whether the number
// is prime or not. A prime number is a natural number greater than 1 that has no
// positive divisors other than 1 and itself

// 9. Write a function which accepts an argument and returns the type, there are 6
// possible values that typeof returns: object, boolean, function, number, string,
// and undefined

// 10. Write a function which returns the n rows by n columns identity matrix

// 11. Write a function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively, i.e. [1, 2, 3, 4, 5] output 2, 4

// 12. Perfect Number TLDR

// 13. Write a function to compute the factors of a positive integer

// 14. Write a function to convert an amount to coins TLDR

// 15. Write a function to compute the value of b^n where n is the exponent and b is
// the base. Accept b and n from the user and display the result

// 16. Write a function to extract unique characters from a string

// 17. Write a function to get the number of occurrences of each letter in specified
// string

// 18. Write a function for searching JavaScript arrays with a binary search
// A binary search searches by splitting an array into smaller and smaller chunks
// until it finds the desired value

// 19. Write a function that returns array elements larger than a number

// 20. Write a function that generates a string id (specified length) of random
// characters

// 21. Write a function to get all possible subset with a fixed length (i.e. 2)
// combinations in an array, i.e. [1, 2, 3] and subset length is 2
// output [[2, 1], [3,1], [3,2], [3,2,1]]

// 22. Write a function that accepts two arguments, a string and a letter and the
// function will count the number of occurrences of the specified letter within the
// string, i.e. 'w3resource.com', 'o' and output = 2

// 23. Write a function to find the first not repeated character

// 24. Write a function to apply Bubble Sort algorithm

// 25. Write a function that accepts a list of country names as input and returns 
// the longest country name as output

// 26. Write a function to find the longest substring in a given string without 
// repeating characters

// 27. Write a function that returns the longest palindrome in a given string

// 28. Write a program to pass a 'JavaScript function' as parameter

// 29. Write a function to get the function name