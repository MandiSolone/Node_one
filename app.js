// function multiply(a, b)  {
//     return a * b; 
// }

// console.log(`Frodo is 51 years old and ${multiply(51, 7)} dog years old.`)

// import http from "http"
// here written as CommonJS

// same thing as saying import http from "http"
//here written as CommonJS, uses the keyword require. This is ES6 Syntax that we'll be using in babbel
const http = require("http");

//A tool express will do the below going forward
http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  response.write("Hello World!");
  response.end();
}).listen(5000, () => {
  console.log("Server listening at http://localhost:5000...");
});