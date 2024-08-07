// Day 3: Control Structures
// Task/Activities:

// Activity - 01: If-Else Statements
// Task 1: WAP to check the number is positive, negative or zero and log the result to the console.

let number = -1;
if (number > 0) {
  console.log("Positive Number");
} else if (number < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero Number");
}

// Task 2: WAP to check the person is eligible to vote(age >=18) and log the result to the console.

let age = 17;
if (age >= 18) {
  console.log("He/She is eligible for voting");
} else {
  console.log("He/She is not eligible for voting");
}

// // Activity - 02: Nested If-Else Statements
// Task 3: WAP to find the largest of three numbers using nested if-else statements.

let firstNumber = 1;
let secondNumber = 2;
let thirdNumber = 3;

if (firstNumber > secondNumber) {
  if (firstNumber > thirdNumber) {
    console.log("Largest Number: First Number");
  } else {
    console.log("Largest Number: Third Number");
  }
} else if (secondNumber > thirdNumber) {
  console.log("Largest Number: Second Number");
} else {
  console.log("Largest Number: Third Number");
}

// // Activity - 03: Switch Case
// Task 4: WAP that uses a switch case to determine the day of the week based on number(1-7) and log the day name to the console

let day = 8;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Out of Days");
    break;
}

// Task 5: WAP that uses a switch case to assign a grade ('A','B','C','D','E') based on a score and log the grade into console. (excellent, very good, good, satisfatory, sufficient)

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Very Good");
    break;
  case "C":
    console.log("Good");
    break;
  case "D":
    console.log("Satisfactory");
    break;
  case "E":
    console.log("Sufficient");
    break;
  default:
    console.log("Try, Next Time");
    break;
}

// // Activity - 04: Conditional (Ternary) Operators
// Task 6: WAP that uses the ternary operator to check if a number is even or odd and log the result to the console.

let Num = 13;
const result = Num % 2 == 0 ? "EVEN" : "ODD";
console.log(result);

// // Activity - 05: Combining Conditions
// Task 7: WAP a program to check if a year is a lead year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result into console.

let year = 2024;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}
