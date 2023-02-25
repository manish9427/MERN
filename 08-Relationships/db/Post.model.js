const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requires: true,
    },
    content: {
      type: String,
      required: true,
      minLength: 50,
    },
    author: {
      userId: String,
      name: String,
      image: String,
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("User", PostSchema);
module.exports = Post;
