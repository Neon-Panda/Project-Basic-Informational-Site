// Updated project/
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/about", (resquest, response) => {
  response.sendFile(__dirname + "/about.html");
});

app.get("/contact-me", (resquest, response) => {
  response.sendFile(__dirname + "/contact-me.html");
});

app.use((resquest, response) => {
  response.status(404).sendFile(__dirname + "/404.html");
});

app.listen(8080);

// Original Project/

// const http = require("node:http");
// const fs = require("node:fs");

// http
//   .createServer((request, response) => {
//     response.setHeader("Content-Type", "text/html");

//     let path = "./";

//     switch (request.url) {
//       case "/":
//         path += "index.html";
//         break;
//       case "/about":
//         path += "about.html";
//         break;
//       case "/contact-me":
//         path += "contact-me.html";
//         break;
//       default:
//         path += "404.html";
//         break;
//     }

//     fs.readFile(path, (error, dataRead) => {
//       error
//         ? (response.end("error"), console.error("Server error"))
//         : response.end(dataRead);
//     });
//   })
//   .listen(8080);
