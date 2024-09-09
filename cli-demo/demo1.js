const readline = require('readline');

const lineDetail = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

lineDetail.question('What is your name? ', (name) => {
    console.log(`Hello ${name}!`);
    lineDetail.close();
});