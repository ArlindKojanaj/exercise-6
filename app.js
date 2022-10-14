let http = require("http");
let fs = require("fs");
let port = 3000;
let url = require("url");
const hostname = "localhost";

// console.log(url);

let server = http.createServer((request, response) => {
  if (request.url == "/nacktschnecke") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        response.writeHead(404);
        response.end("This file doesn't exist");
      } else {
        response.writeHead(200, {
          "content-type": "text/html; charset=utf-8",
        });
        response.write(data);
      }
      response.end();
    });
  } else if (request.url == "/about") {
    fs.readFile("main.html", (err, data) => {
      if (err) {
        response.writeHead(404);
        response.end("This file doesn't exist");
      } else {
        response.writeHead(200, {
          "content-type": "text/html; charset=utf-8",
        });
        response.write(data);
      }
      response.end();
    });
  }
});

server.listen(port, hostname, function (error) {
  if (error) {
    console.log("there is a problem", error);
  } else {
    console.log(`Server running at http://${hostname}:${port}/nacktschnecke`);
    console.log(`Server running at http://${hostname}:${port}/about`);
  }
});
