const http = require("http");
const fs = require("fs");

fs.readFile("home.html", (err, home) => {
  if (err) {
    console.log(err);
  } else {
    console.log(home.toString());
  }
});