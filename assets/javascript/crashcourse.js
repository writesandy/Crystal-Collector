'use strict';

// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

const appleSlices = '';


// 2. ARRAYS
// ==========================================================

// Create an array of five strings

const mcDonalds = ['french fries', 'chocolate milk', 'cheeseburger', 'hamburger', 'apple pie'];


// Create an array of five numbers

const numbers = [1, 2, 3, 4, 5];


// 3. FOR LOOPS
// ==========================================================


// Create a for loop that loops through and prints "My name is Bob five times"

let text = '';
let i;

for (i = 0; i < 5; i++) {
    text += "My name is Bob" + i + "<br>";
  console.log(text);
}

// Create a for loop that loops through your five string array

let mcDonalds = ['french fries', 'chocolate milk', 'cheeseburger', 'hamburger', 'apple pie'];

let i;

for(i = 0; i < mcDonalds.length; i++) {
    mcDonalds[i] + "<br>";
    console.log(mcDonalds);
}


// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

let n = numbers();

function numbers(num1, num2) {
    return num1 / num2;
}

console.log(numbers(8,2));


// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

const num = [5, 10, 15, 20, 25, 30]

num.forEach(function(item, index, array) {
    console.log(item, index);
})



// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

const dinner = {
    serveOrder: 1
    course: "salad", 
    type: "caesar", 
    spiceLevel: "none",
    color: "green"
};


// Console log any three of the properties in that object



// Create an Array of 5 Objects


// Console log 3 properties for every one of the five objects


// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.




// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
