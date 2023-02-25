const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    requires: true,
  },
  email: String,
  gender: String,
  password: String,
  image: String,
  phone: String,
  dateOfBirth: String,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
