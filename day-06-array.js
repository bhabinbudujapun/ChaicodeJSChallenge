// Day 6: Array
// Task/Activities:

// Activity - 01: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array values

let number_array = [1, 2, 3, 4, 5];
for (let index = 0; index < number_array.length; index++) {
  const element = number_array[index];
  console.log(element);
}

// Task 2: Access the first and last element of the previous array

// Accessing the First Element
console.log("First Element: " + number_array[0]);

//Accessing the Last Element
console.log("Last Element: " + number_array[number_array.length - 1]);

// Activity - 02: Array Methods (Basic)

let values = [1, "apple", 2, "ball", 3, 4, "cat"];
console.log("Original Array: ", values);

// Task 3: Use 'push' method to add new number and log updated array

values.push("77");
console.log("After Push: ", values);

// Task 4: Use 'pop' method to remove the last element and log the updated array

const pop_value = values.pop();
console.log("Pop Value: ", pop_value);
console.log("After Pop: ", values);

// Task 5: Use 'shift' method to remove the first element from the array log the updated array

const shift_value = values.shift();
console.log("Shift Value: ", shift_value);
console.log("After Shift: ", values);

// Task 6: Use 'unshift' method to add new number to the beginning of the array and log the updated array

values.unshift(77);
console.log("After Unshift: ", values);

// Activity - 03: Array Methods (Intermediate)
// Task 7: Use 'map' method to double each value and log the updated value
// Task 8: Use 'filter' method create new array of even numbers and log the new array
// Task 9: Use 'reduce' method to sum all the numbers of array.

// Activity - 04: Array Iteration
// Task 10: Use 'for loop' to iterate over the array
// Task 11: Use 'forEach' method to iterate over the array

// Activity - 05: Multi-dimensional arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array
// Task 13: Access and log a specific element from the 2D array.
