// Day 6: Object
// Task/Activities:

// Activity - 01: Object Creation and Access
// Task 1: create an object representing a book with properties like title author and year and log the object to the console
// Task 2: access the log and the title and author properties of the book object

//Answer for both question 1 and 2

class Book {
  constructor(title, author, year) {
    (this.title = title), (this.author = author), (this.year = year);
  }
}

let munamadan = new Book("Muna And Madan", "Laxmi Prashad Devkota", 1935);
console.log(
  `${munamadan.title} was written in ${munamadan.year} by ${munamadan.author}`
);

// Activity - 02: Object Methods (Basic)
// Task 3: add a method to the book object that return a sting with the book title and author and log the result of calling this method
// Task 4: add a method to the book object that take a parameter(year) and update  the books year property then log the updated object

// Activity - 03: Nested Objects (Intermediate)
// Task 5: create a nested object respresenting a library with properties like name and book ( an array of book object) and log the library object to the console
// Task 6: access tand log the name of library and the title of all the books in the libaray

// Activity - 04: The 'this' keyword
// Task 7: add a method to the book object that use the this keyword to return a string with the book title and year and log the result of calling this method

// Activity - 05: Objects Iteration
// Task 8: use a for...in loop to iterate over the properties of the book object and log each property and its value
// Task 9: use object.key and object.value method to log alll the key value of the book object
