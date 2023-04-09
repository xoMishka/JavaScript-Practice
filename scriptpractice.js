// Greeting
function greeting() {
    console.log('Helloooo');
}

greeting();
    // pass! :)

// Celsius to Fahrenheit
function toFahrenheit(celsius) {
    // F = C x 9/5 + 32
    return celsius * 9/5 + 32;
}

console.log(toFahrenheit(35));
    // 95 ... forgot return!

// Print an Array of Names
function printArray(names) {
    // loop through an array
    // outputs each item in a list
    for (let i=0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Amber", "Xander", "Nick"]);
    // need to memorize loops

// Print an Array of Names
function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Amber", "Xander", "Nick"]);
    // only forgot names[i]

// Print an Array of Names
function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Shawn", "Gus", "Juliet"]);
    // 4 more times!

// Print an Array of Names
function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Zyra", "Lux", "Syndra"]);
    // 3 more times!

// Print an Array of Names
function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Reuben", "Ty", "Mark"]);
    // 2 more times!

// Print an Array of Names
function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Rocky Mountain", "Glacier", "Zion"]);
    // 1 more time!!

// Print an Array of Names
function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

printArray(["Nick Andros", "Larry Underwood", "Stu Redman"]);
    // should be good now lol

// Triple the Parameter
function triple(x) {
    return x + x + x;
}    

console.log(triple(8));     // 24
console.log(triple("x"));     // xxx
    // forgot return again!

// Is it even?
function even(x) {
    return x % 2 == 0;
}

console.log(even(8));
    // wasn't sure what to name the parameter
    // is the remainder 0 when a number
    // x is divided by 2? need to practice