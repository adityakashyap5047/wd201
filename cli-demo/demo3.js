/* eslint-disable no-undef */
const args = process.argv;
const operation = args[2];
const num1 = parseInt(args[3]);
const num2 = parseInt(args[4]);

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
