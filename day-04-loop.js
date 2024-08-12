// Day 4: Loop
// Task/Activities:

// Activity - 01: For Loop
// Task 1: WAP to print numbers from 1 to 10 using for loop

for (let number = 1; number <= 10; number++) {
  console.log(number);
}

// Task 2: WAP to print multiplication table of 6 using a for loop

for (let table = 1; table <= 10; table++) {
  console.log(table * 6);
}

// // Activity - 02: While Loop
// Task 3: WAP to calculate sum of numbers from 1 to 10 using while loop

let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;
  num += 1;
}
console.log(sum);

// Task 4: WAP to print numbers from 10 to 1 using while loop

let reverse_num = 10;
while (reverse_num) {
  console.log(reverse_num);
  reverse_num--;
}

// // Activity - 03: Do...While Loop
// Task 5: WAP print numbers from 1 to 5 using a do...while loop

let numbers = 1;
do {
  console.log(numbers);
  numbers += 1;
} while (numbers <= 5);

// Task 6: WAP calculate the factorial of number using a do...while loop

// // Activity - 04: Nested Loops
// Task 7: WAP to print pattern using nested for loops
// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = 0; i < 5; i++) {
  let stars = " ";
  for (let j = 0; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}
