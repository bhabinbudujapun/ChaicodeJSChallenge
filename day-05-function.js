// Day 5: Functions
// Task/Activities:

// Activity - 01: Function Declaration
// Task 1: WAF to check if a number if odd or even and console the result

function isEven(number) {
  if (number % 2 == 0) return "Even Number";
  return "Odd Number";
}

let number = 32;
console.log(isEven(number));

// Task 2: WAF to calculate the square of a number and return the result

function square(number) {
  return number * number;
}

let square_number = 5;
console.log(square(square_number));

// Activity - 02: Function Expression
// Task 3: WAF expression to find the max number between two and log the result

function max_number(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) return firstNumber;
  return secondNumber;
}

let firstNumber = 15;
let secondNumber = 14;
console.log(max_number(firstNumber, secondNumber));

// Task 4: WAF expression to concatenate two strings and return the result

function concat_string(firstString, secondString) {
  return firstString + secondString;
}

let firstString = "bhabin";
let secondString = "root";

console.log(concat_string(firstString, secondString));

// Activity - 03: Arrow Functions
// Task 5: Arrow Function to calculate sum of two numbers and return the result

const arrowSumFun = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};
console.log(arrowSumFun(1, 2));

// Task 6: Arrow Function to check string contains a specific char. and return boolean value
// function: indexOf(char) return index of character otherwise -1

const arrowStrFun = (Char) => {
  let word = "Arrow";
  return word.indexOf(Char) != -1 ? true : false;
};

console.log(arrowStrFun("A"));

// Activity - 04: Function Parameters and Default Values
// Task 7: WAF that takes two parameters and returns their product. And provide default value for second parameter.
// Task 8: WAF that takes person's name and age and returns a greeting message. Provide a default value for the age.

// Activity - 05: Higher-Order Functions
// Task 8:  Higher-Order Func. that takes a Func. and number, and calls the function that many times
// Task 9: Higher-Order Func. that takes two Func. and a value, applies the fist Func. to the value, and then applies the second func. to the result
