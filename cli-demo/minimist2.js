/* eslint-disable no-undef */
const minimist = require('minimist');
const args = minimist(process.argv.slice(2), {
  default: {
    num1: 5,
    operation: 'add',
  },
});

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

//   ```node minimist2.js --num2 8```
//  Output ---> The sum of 5 and 8 is 13.
