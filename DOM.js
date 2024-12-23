// DOM Manipulation in JavaScript

// What is the DOM?
// - DOM (Document Object Model) represents the HTML structure of a web page as a tree of nodes.
// - JavaScript can be used to manipulate the DOM to change content, styles, attributes, and structure dynamically.

// Selecting Elements
// 1. By ID
// let elementById = document.getElementById("exampleId");
// console.log(elementById);

// 2. By Class Name
// let elementsByClass = document.getElementsByClassName("exampleClass");
// console.log(elementsByClass);

// 3. By Tag Name
// let elementsByTag = document.getElementsByTagName("div");
// console.log(elementsByTag);

// 4. By CSS Selectors
// let elementBySelector = document.querySelector(".exampleClass");
// console.log(elementBySelector);

// let elementsBySelectorAll = document.querySelectorAll("div.exampleClass");
// console.log(elementsBySelectorAll);

// Modifying Content
// Example: Changing inner HTML and text content
// let heading = document.getElementById("heading");
// heading.innerHTML = "Updated Heading"; // Updates HTML inside the element
// heading.textContent = "Plain Text Heading"; // Updates plain text inside the element

// Modifying Attributes
// Example: Adding or modifying attributes of an element
// let link = document.querySelector("a");
// link.setAttribute("href", "https://example.com");
// link.setAttribute("target", "_blank");
// console.log(link.getAttribute("href")); // Logs the href attribute

// Adding and Removing Classes
// Example: Managing classes dynamically
// heading.classList.add("new-class"); // Adds a new class to the element
// heading.classList.remove("old-class"); // Removes a specific class
// console.log(heading.classList.contains("new-class")); // Checks if a class exists
// heading.classList.toggle("highlight"); // Toggles a class (adds if not present, removes if present)

// Styling Elements
// Example: Applying inline styles directly via JavaScript
// heading.style.color = "blue"; // Changes the text color
// heading.style.fontSize = "24px"; // Changes the font size

// Creating and Adding Elements
// Example: Dynamically creating and appending elements
// let newElement = document.createElement("p"); // Creates a new paragraph element
// newElement.textContent = "This is a new paragraph."; // Sets its text content
// document.body.appendChild(newElement); // Appends it to the body of the document

// Removing Elements
// Example: Removing elements dynamically
// let toRemove = document.getElementById("toRemove");
// toRemove.remove(); // Removes the element from the DOM

// Event Handling
// Example: Adding an event listener to a button
// let button = document.getElementById("button");
// button.addEventListener("click", function () {
//     alert("Button clicked!"); // Displays an alert when the button is clicked
// });

// Example: Removing an event listener
// let handler = function () {
//     console.log("This will not run anymore.");
// };
// button.addEventListener("click", handler);
// button.removeEventListener("click", handler);

// Traversing the DOM
// Example: Navigating through parent and sibling nodes
// let parent = heading.parentElement; // Gets the parent node
// let children = heading.children; // Gets child nodes
// let nextSibling = heading.nextElementSibling; // Gets the next sibling element
// let previousSibling = heading.previousElementSibling; // Gets the previous sibling element

// Practical Example: Creating a To-Do List
// Example: Adding items to a to-do list and removing them
// let todoList = document.getElementById("todoList");
// let input = document.getElementById("todoInput");
// let addButton = document.getElementById("addButton");

// addButton.addEventListener("click", function () {
//     let listItem = document.createElement("li"); // Creates a new list item
//     listItem.textContent = input.value; // Sets its content to the input value
//     todoList.appendChild(listItem); // Appends it to the to-do list
//     input.value = ""; // Clears the input field

//     listItem.addEventListener("click", function () {
//         listItem.remove(); // Removes the item when clicked
//     });
// });

// Summary:
// - DOM manipulation allows dynamic changes to the structure and appearance of a web page.
// - Use modern methods like `querySelector` and `querySelectorAll` for more flexibility.
// - Event handling enables interactive elements.
// - Always ensure DOM manipulation is performed after the DOM is fully loaded.
