const crypto = require("crypto");
console.log(crypto.randomInt(10, 20));

const os = require("os");
console.log(os.cpus());

const fs = require("fs");
// console.log(fs.readFileSync("./README.md", "utf8"));

// console.log(
//   fs.readFileSync("./README.md", {
//     encoding: "UTF-8",
//   })
// );

const file = fs.readFileSync("./README.md", {
  encoding: "UTF-8",
});
console.log(file);
