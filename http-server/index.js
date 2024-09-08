const fs = require("fs");

//writeFile() method is used to write data to a file. It replaces the file if it already exists.
fs.writeFile(
  "sample.txt",
  "Hello World. Welcome to Node.js File System module.",
  (err) => {
    if (err) throw err;
    console.log("File created!");
  }
);

//readFile() method is used to read data from a file. It returns the contents in the form of a buffer.
fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//appendFile() method is used to append data to a file. It creates a new file if the specified file does not exist.
fs.appendFile("sample.txt", " This is my updated content", (err) => {
    if (err) throw err;
    console.log("File updated!");
  });