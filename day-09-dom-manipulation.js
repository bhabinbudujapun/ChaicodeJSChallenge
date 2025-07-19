// Day 9: DOM Manipulation
// Task/Activities:

// Activity - 01: Selecting and Manipulating Elements
// Task 1: Select and HTML element by its ID and change its text content.
const elementById = document.getElementById("myElement");
if (elementById) {
    elementById.textContent = "This is the new text content.";
}   
// Task 2: Select and HTML element by its class and change its background color.
const elementsByClass = document.getElementsByClassName("myClass");
if (elementsByClass.length > 0) {   
    for (let i = 0; i < elementsByClass.length; i++) {
        elementsByClass[i].style.backgroundColor = "lightblue";
    }
}

// Activity - 02: Creating and Appending Elements
// Task 3: Create a new 'div' element with some text content and append it to the body.
const div = document.createElement("div");
div.textContent = "This is a new div element.";
document.body.appendChild(div);

// Task 4: Create a new 'li' element and add it to an existing 'ul' list.
const li = document.createElement("li");
li.textContent = "This is a new list item.";
const ul = document.querySelector("ul"); // Assuming there's an existing <ul> in the HTML

// Activity - 03: Removing Elements
// Task 5: Select and HTML element and remove it from the DOM.
const elementToRemove = document.querySelector(".remove-me");
if (elementToRemove) {
    elementToRemove.remove();
}
// Task 6: Remove the last child of a specific HTML element.
const parentElement = document.querySelector(".parent-element"); // Assuming there's a parent element with this class
if (parentElement && parentElement.lastChild) {
    parentElement.removeChild(parentElement.lastChild);
}
// Activity - 04: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g., 'src' of an 'img' tag).
// Task 8: Add and remove a CSS class to/from an HTML element.

// Activity - 05: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
// Task 10: Add a mouseover event listener to an element that changes its border color.
