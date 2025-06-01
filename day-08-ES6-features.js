// Day 6: ES6+ Features Solutions

//  Activity - 01: Template Literals

//  Task 1: Basic Template Literal
javascript;
const name = "Alice";
const age = 28;
console.log(`My name is ${name} and I am ${age} years old.`);

//  Task 2: Multi-line String
javascript;
const multiLineString = `
  This is a multi-line string
  created using template literals.
  It preserves all line breaks
  and indentation exactly as written.
`;
console.log(multiLineString);

//  Activity - 02: Destructuring

//  Task 3: Array Destructuring
javascript;
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(`First element: ${first}, Second element: ${second}`);

//  Task 4: Object Destructuring
javascript;
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};
const { title, author } = book;
console.log(`Book: ${title} by ${author}`);

//  Activity - 03: Spread and Rest Operators

//  Task 5: Spread Operator with Arrays
javascript;
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4, 5, 6];
console.log("New array:", newArray);

//  Task 6: Rest Operator in Functions
javascript;
function sumNumbers(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum of 1, 2, 3:", sumNumbers(1, 2, 3));
console.log("Sum of 5, 10, 15, 20:", sumNumbers(5, 10, 15, 20));

//  Activity - 04: Default Parameters

//  Task 7: Function with Default Parameter
javascript;
function multiply(a, b = 1) {
  return a * b;
}
console.log("Multiply 5 by 3:", multiply(5, 3));
console.log("Multiply 5 (default b):", multiply(5));

//  Activity - 05: Enhanced Object Literals

//  Task 8: Enhanced Object with Methods
javascript;
const person = {
  name: "Bob",
  age: 35,
  // Shorthand method syntax
  greet() {
    return `Hello, my name is ${this.name}!`;
  },
  // Computed property name
  ["status"]: "active",
};
console.log(person);
console.log(person.greet());

//  Task 9: Computed Property Names
javascript;
const propName = "color";
const propValue = "blue";
const dynamicObj = {
  [propName]: propValue,
  [`${propName}Code`]: 123,
};
console.log("Object with computed properties:", dynamicObj);
