const express = require("express");
const server = express();
// -----------------Middleware------------- ----
function logRequest(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next(); // pass the control to the next function (request handler)
}

let count = 0;
function countRequest(req, res, next) {
  count++;
  console.log("Request #", count);
  next();
}
// ---------------------------------------------
const rh1 = (req, res) => {
  res.send(`<h1>Hello world</h1>`);
};

const rh2 = (req, res) => {
  res.send(`<h1>Bye</h1>`);
};

// ---------------------------------------------
server.use(logRequest);
server.use(countRequest);

//----------------------------------------
server.get("/", rh1);
server.get("/bye", rh2);

// ----------------------------------------------
server.listen(3000, console.log("http://localhost:3000"));
