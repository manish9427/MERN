const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log("request receved");
  if (req.url === "/welcome.html" && req.method === "GET") {
    const index = fs.readFileSync("./index.html", { encoding: "utf8" });
    res.write(index);
    res.end();
  } else {
    res.write("first chunk\n");
    res.write("second chunk\n");
    res.write("third chunk\n");
    res.write("whoa");
    res.end();
  }
});
server.listen(8080);
console.log("http://localhost:8080 ");
