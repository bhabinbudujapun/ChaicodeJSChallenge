// Day 11:  Promises and Async/Await
// Task/Activities:

// Activity - 01: Understanding Promises
// Task 1: Create a promise that resloves with a message after a 2-second timeout and log the message to the console.
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Operation Successfull");
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

// Activity - 02: Chaining Promise
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// Activity - 03: Using Async/Await
// Task 4: Write an async function that waits for a promise to reslove and then logs the reloved value.
// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// Activity - 04: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

// Activity - 05: Event Delegation
// Task 8: Use Promise.all to wait for multiple promises to reslove and then log all their values.
// Task 9: Use Promise.race to log the value of the first promise that resloves among multiple promises.
