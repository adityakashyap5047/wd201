console.log('Hello 1');

// Print message after 2 second
setTimeout(function() {
   console.log('Hello 2');
}, 2000);
console.log('Hello 3');

const firstName = (name) => console.log(name);

const lastName = (name) => console.log(name);

const printName = () => {
    console.log("My name is: ");
    firstName("Aditya");
    lastName("Kumar");
}

printName();