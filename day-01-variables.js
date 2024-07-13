// Day 1: Variables and Data type
// Task/Activities:

// Activity - 01: Variable Declaraction
// var
var challengeDay = 30;
console.log(challengeDay);

// let
let challengeName = "ChaiCode-30-JS-challenge";
console.log(challengeName);

// Activity - 02: Constant Declaraction
// const
const challengeAccept = true;
console.log(challengeAccept);

// Activity - 03: Data Type
let challengeDay1 = 1;
let challengeDayOne = "One";
let challengeDay1Accept = true;
const challengeObject = {
  challengePlatform: "chaicode",
  challengeAcceptBy: "bhabin buduja pun",
  challageTotalDays: 30,
};

let challengeArray = [1, true, "chaicode", "JS-30"];

console.log(typeof challengeDay1);
console.log(typeof challengeDayOne);
console.log(typeof challengeDay1Accept);
console.log(typeof challengeObject);
console.log(typeof challengeArray);

// Activity - 04: Reassign Variables
let reassignVariable = true;
console.log(reassignVariable);

reassignVariable = "changedByRoot";
console.log(reassignVariable);

// Activity - 05: Understanding 'const'
const constVariable = "immutable";

constVariable = true;
console.log(constVariable);

// ERROR MESSAGE: constVariable = true;

// TypeError: Assignment to constant variable.
//     at Object.<anonymous>
