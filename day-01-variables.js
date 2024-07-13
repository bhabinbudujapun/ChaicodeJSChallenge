// Day 1: Variables and Data type
// Task/Activities:

// Activity - 01: Variable Declaraction
// var
var challangeDay = 30;
console.log(challangeDay);

// let
let challangeName = "ChaiCode-30-JS-Challange";
console.log(challangeName);

// Activity - 02: Constant Declaraction
// const
const challangeAccept = true;
console.log(challangeAccept);

// Activity - 03: Data Type
let challangeDay1 = 1;
let challangeDayOne = "One";
let challangeDay1Accept = true;
const challangeObject = {
  challangePlatform: "chaicode",
  challangeAcceptBy: "bhabin buduja pun",
  challageTotalDays: 30,
};

let challangeArray = [1, true, "chaicode", "JS-30"];

console.log(typeof challangeDay1);
console.log(typeof challangeDayOne);
console.log(typeof challangeDay1Accept);
console.log(typeof challangeObject);
console.log(typeof challangeArray);

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

