console.log("Hello");

let name = "manish";
console.log(name);

var description = process.env[3];
if (!description) {
  console.log("full stack developer");
} else {
  console.log(description);
}
console.log("path", process.argv);
