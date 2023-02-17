const express = require("express");
const server = express();

// Request Method--->path, Handler
server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/welcome.html", (req, res) => {
  res.send("<h1>welcome World</h1>");
});

server.post("/hello", (req, res) => {
  res.send("Hello");
});

server.post("/hello/:user", (req, res) => {
  res.send("Hello user");
});

server.post("/welcome/:user", (req, res) => {
  const user = req.params.user;
  res.send("Welcome  " + user);
});

// try {
//   server.get("/*", (req, res) => {
//     res.send("Something Went Wrong");
//   });
// } catch (e) {
//   console.log(e.message);
//   res.send("Something Went Wrong");
// }

server.get("/fileName", (req, res) => {
  const fileName = req.params.fileName;
  try {
    res.send;
  } catch (e) {
    console.log(e.message);
    res.send("Something Went Wrong");
  }
}),
  server.listen(3000, () => {
    console.log("server is stating at http://localhost:3000");
  });
