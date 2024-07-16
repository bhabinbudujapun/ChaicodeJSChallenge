// Day 2: Operators
// Task/Activities:

// Activity - 01: Arithmetic Operations
// Task 1: WAP to add two numbers and log the result to the console.
let addFirstNumber = 66;
let addSecondNumber = 11;
let sum = addFirstNumber + addSecondNumber;
console.log(sum);

// Task 2: WAP to subtract two numbers and log the result to the console.
let subFirstNumber = 66;
let subSecondNumber = 11;
let sub = subFirstNumber - subSecondNumber;
console.log(sub);

// Task 3: WAP to mul two numbers and log the result to the console.
let mulFirstNumber = 66;
let mulSecondNumber = 11;
let mul = mulFirstNumber * mulSecondNumber;
console.log(mul);

// Task 4: WAP to div two numbers and log the result to the console.
let divFirstNumber = 66;
let divSecondNumber = 11;
let div = divFirstNumber / divSecondNumber;
console.log(div);

// Task 4: WAP to find remainder bewteen two numbers and log the result to the console.
let FirstNumber = 66;
let SecondNumber = 11;
let remainder = FirstNumber % SecondNumber;
console.log(remainder);

// // Activity - 02: Assignment Operators
// Task 6: Use "+=" Operator to add number console the result
let addAssignOperator = 77;
addAssignOperator += 1;
console.log(addAssignOperator);

// Task 7: Use '-=' Operator to subtract number console the result
let subAssignOperator = 77;
subAssignOperator -= 1;
console.log(subAssignOperator);

// // Activity - 03: Comparison Operators
// Task 8: WAP a program where you use '<' and '>' operator to compare two number and console result
let comparVal01 = 77;
let comparVal02 = 66;
let comparResult01 = 77 > 66;
let comparResult02 = 77 < 66;
console.log(comparResult01, comparResult02);

// Task 9: WAP a program where you use '<=' and '>=' operator to compare two number and console result
let comparResult03 = comparVal01 <= comparVal02;
let comparResult04 = comparVal01 >= comparVal02;
console.log(comparResult03, comparResult04);

// Task 10: WAP a program where you use '==' and '===' operator to compare two number and console result
let comparResult05 = comparVal01 == comparVal02;
let comparResult06 = comparVal01 === comparVal02;
console.log(comparResult05, comparResult06);

// // Activity - 04: Logical Operators
// Task 11: WAP that uses '&&' operator to combine two condition and log the result
if (comparVal01 > comparVal02 && comparVal01 != comparVal02) {
  console.log("Yes, First value is Greater and Not Equal");
} else {
  console.log("This is Else condition, where Above One Value is not TRUE");
}

// Task 12: WAP that uses '||' operator to combine two condition and log the result
if (comparVal01 <= comparVal02 || comparVal01 == comparVal02) {
  console.log("OR Operator, True If One Case is True");
} else {
  console.log("Else part, If Both Case are False");
}

// Task 13: WAP that uses '!' operator to neglate a condition and log the result
if (!true) {
  console.log("It's TRUE");
} else {
  console.log("It's Not TRUE");
}

// // Activity - 05: Ternary Operators
// Task 14:
comparVal01 > comparVal02
  ? console.log("Greater: First Value")
  : console.log("Smallest: First Value");
