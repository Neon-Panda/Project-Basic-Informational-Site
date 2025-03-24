const http = require("node:http");
const fs = require("node:fs");

http
  .createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");

    let path = "./";

    switch (request.url) {
      case "/":
        path += "index.html";
        break;
      case "/about":
        path += "about.html";
        break;
      case "/contact-me":
        path += "contact-me.html";
        break;
      default:
        path += "404.html";
        break;
    }

    fs.readFile(path, (error, dataRead) => {
      error
        ? (response.end("error"), console.error("Server error"))
        : response.end(dataRead);
    });
  })
  .listen(8080);
