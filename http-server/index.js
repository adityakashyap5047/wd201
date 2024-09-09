const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    console.log(err);
  } 
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    console.log(err);
  } 
  projectContent = project;
});

http.createServer((req, res) => {
  let url = req.url;
  res.writeHead(200, { "Content-Type": "text/html" });
  switch (url) {
    case "/project":
      res.write(projectContent);
      break;
    default:
      res.write(homeContent);
      break;
  }
}).listen(8080);