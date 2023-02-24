const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test");

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

// //importing mongoose
// const mongoose = require("mongoose");
// //now connecting mongoose with our database

// // async function connectDatabase() {}
