// the below code is going to print the request time and number of request made on the terminal

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const server = express();
const employeeRouter = require("./routes/employee.routes");
// -----------------Middleware------------- ----
function logRequest(req, res, next) {
  next(); // pass the control to the next function (request handler)
  console.log(new Date(), req.method, req.url);
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
server.use(express.json());

// ---------------------------------------------
server.use(morgan("tiny"));

// ---------------------------------------------
server.use(cors());

// ---------------------------------------------
// How to serve static file with a middleware built-in express
// This will serve any file under static folder
// For example: /images/screenshot.png will send png file as response
// http://localhost:3000/ = http://localhost:3000/index.html
server.use(express.static("static"));

// ---------------------------------------------
server.use(logRequest);
server.use(countRequest);

//-----------------------------------------------
server.use("/employee", employeeRouter);

//----------------------------------------
server.get("/", rh1);
server.get("/bye", rh2);
//----------------------------------------
server.get("/employee", (req, res) => {});
server.post("/employee", (req, res) => {});
server.patch("/employee/:id", (req, res) => {});
server.delete("/employee/:id", (req, res) => {});
// ----------------------------------------------
server.listen(3000, console.log("http://localhost:3000"));

//-----------------------------------------
// GET/-->logRequest-->countRequest-->rh2
// GET/bye-->logRequest-->countRequest-->rh2
