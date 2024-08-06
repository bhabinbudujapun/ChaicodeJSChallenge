// Day 11:  Promises and Async/Await
// Task/Activities:

// Activity - 01: Understanding Promises
// Task 1: Create a promise that resloves with a message after a 2-second timeout and log the message to the console.

const resolvePromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Operation Successfull");
  }, 2000);
});

resolvePromise.then((message) => {
  console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const rejectPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Operation Failed");
  }, 2000);
});

rejectPromise.catch((message) => {
  console.log(message);
});

// Activity - 02: Chaining Promise
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

fetchData("Fetching user data...", 1000)
  .then(() => fetchData("User data fetched", 1000))
  .then(() => fetchData("Fetching posts...", 1000))
  .then(() => fetchData("Posts fetched", 1000))
  .then(() => fetchData("Fetching comments...", 1000))
  .then(() => fetchData("Comments fetched", 1000))
  .then(() => console.log("All data fetched"))
  .catch((error) => console.error("An error occurred:", error));

// Activity - 03: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolve value.

function userMessage(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({
          UserId: userId,
          UserName: "Bhabin Buduja pun",
          UserMessage: "Completed Task-04, async/await",
        });
      } else {
        reject(new Error("Unable To Fetch User Message"));
      }
    }, 1000);
  });
}

async function getUserMessage(userId) {
  try {
    const userData = await userMessage(userId);
    console.log("User Data: ", userData.UserName);

    // You can invoke individual(userid, username, usermessage) parameter
    // console.log("User Data: ", userData.UserMessage);
  } catch (error) {
    console.log(error.message);
  }
}

getUserMessage(1);

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

function userInfo(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId < 4) {
        resolve({
          UserId: userId,
          UserName: "Bhabin Buduja pun",
          UserAddress: "Lalitpur",
        });
      } else {
        reject(new Error("Unable To Fetch The User Info"));
      }
    }, 1000);
  });
}

async function getUserInfo(userId) {
  try {
    const user = await userInfo(userId);
    console.log(user.UserName);
  } catch (error) {
    console.log(error.message);
  }
}

getUserInfo(4);

// Activity - 04: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const fetchApiPromise = new Promise((resolve, reject) => {
  const url = "https://jsonplaceholder.typicode.com/todos/1a";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      return response.json();
    })
    .then((todos) => {
      console.log("Fetched Data: ", todos);
    })
    .catch((error) => console.log(error));
});

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

function todoTask(taskId) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const url = `https://jsonplaceholder.typicode.com/todos/${taskId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const taskInfo = await response.json();
        resolve(taskInfo);
      } catch (error) {
        reject(error);
      }
    });
  }, 1000);
}

async function getTodoTask() {
  const taskId = 5;
  try {
    const taskInfo = await todoTask(taskId);
    console.log(taskInfo);
  } catch (error) {
    console.log(error);
  }
}
getTodoTask();

// Activity - 05: Event Delegation
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
