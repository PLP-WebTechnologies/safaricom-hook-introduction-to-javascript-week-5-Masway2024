// Part 1: JavaScript Basics

// Variables and Data Types
let name = "John Doe"; // string
let age = 25; // number
let isStudent = true; // boolean
let favoriteColors = ["blue", "green", "red"]; // array
let person = { name: "John", age: 25, isStudent: true }; // object

// Printing values and types using console.log()
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Favorite colors: ${favoriteColors} (Type: ${typeof favoriteColors})`);
console.log(`Person object: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators

// Simple Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    let result;
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Cannot divide by zero.";
        }
    } else {
        result = "Invalid operation!";
    }

    alert(`Result: ${result}`);
}

// Call the calculator function
calculator();

// Functions

// greetUser function
function greetUser(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

// Display the greeting message in the dynamic-content div
document.getElementById("dynamic-content").innerHTML = greetUser("John");

// Part 2: JavaScript Control Structures

// If Statements
let userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
    alert("You are eligible to vote.");
} else {
    alert("You are not eligible to vote.");
}

// Loops

// Loop to display numbers 1 to 10
let numberList = "<ol>";
for (let i = 1; i <= 10; i++) {
    numberList += `<li>${i}</li>`;
}
numberList += "</ol>";

// Display numbers on the webpage
document.body.innerHTML += numberList;

// Part 3: Introduction to the DOM

// Selecting and Modifying HTML Elements
document.querySelector("h1").innerText = "JavaScript in Action!";

// Adding a new paragraph inside the dynamic-content div
let newParagraph = document.createElement("p");
newParagraph.innerText = "This content was added dynamically using JavaScript.";
document.getElementById("dynamic-content").appendChild(newParagraph);

