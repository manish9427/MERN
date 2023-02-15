const crypto = require("crypto");
// console.log(crypto.randomInt(10, 20));

const os = require("os");
// console.log(os.cpus());

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
// console.log(file);

const fibonacci = require("./fibonacci");
// console.log(fibonacci(5));

const { faker } = require("@faker-js/faker");
function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}
console.log("random", createRandomUser());

const axios = require("axios");
async function sampleGetRequest() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log(response.data);
}

sampleGetRequest();
