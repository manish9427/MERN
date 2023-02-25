const mongoose = require("mongoose");

//Connecting to db
async function connectDatabase() {
  try {
    awaitmongoose.connect("mongodb://127.0.0.1/blogs-example");
    console.log("Connected to Database");
  } catch (err) {
    console.log("could not connect to Database");
  }
}
module.exports = connectDatabase;
