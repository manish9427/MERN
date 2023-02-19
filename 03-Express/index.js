const express = require("express");
const server = express();
const fs = require("fs");

// Request Method--->path, Handler
server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  try {
    const content = fs.readFileSync(`./static/${fileName}`, {
      encoding: "utf8",
    });
    res.send(content);
  } catch (e) {
    console.log(e.message);
    // res.send("Something Went Wrong");
    res.status(404).send("Something Went Wrong");
  }
}),
  // ------------------------Post-----------------------------

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
server.listen(3000, () => {
  console.log("server is stating at http://localhost:3000");
});
