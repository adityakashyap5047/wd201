/* eslint-disable no-undef */
//npm package for CLI Input ---> minimist

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

//We can access the arguments passed to the script using the args object.
const num1 = parseInt(args.num1);
const num2 = parseInt(args.num2);
const operation = args.operation;

if (operation === 'add') {
  console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}.`);
} else if (operation === 'subtract') {
  console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}.`);
} else if (operation === 'multiply') {
  console.log(`The product of ${num1} and ${num2} is ${num1 * num2}.`);
} else if (operation === 'divide') {
  console.log(`The quotient of ${num1} and ${num2} is ${num1 / num2}.`);
} else {
  console.log('Invalid operation.');
}

//To run it we can

//  ```node .\minimistCli.js --num1 5 --num2 9 --operation add```
// Output --->  The sum of 5 and 9 is 14.

//With Minimist, the args object would look like this:

// args = {
//   "operation": "add",
//   "num1": 5,
//   "num2": 10,
//   "_": []
// }

//The _ property is an array that contains any arguments without a label or flag, which in this case is empty because we used named arguments.
