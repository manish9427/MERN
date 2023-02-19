const express = require("express");
const server = express();
const fs = require("fs");
server.use(express.json());

// Request Method--->path, Handler
server.get("/", (req, res) => {
  res.send("Home Page");
});
server.get("/manish/:user", (req, res) => {
  const user = req.params.user;
  res.send("Hii " + user);
});

server.get("/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const query = req.query;
  console.log("Query: ", query);

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

  server.post("/", (req, res) => {
    res.send("Hello");
  });

server.post("/manish/:user", (req, res) => {
  const user = req.params.user;
  res.send("Hello " + user);
});
server.post("/:user", (req, res) => {
  const user = req.params.user;
  const body = req.body;
  console.log("Body", body);
  res.send("Hello " + user);
});

server.listen(3000, () => {
  console.log("server is stating at http://localhost:3000");
});
