const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  id: {
    type: String,
  },

  author: {
    tyoe: String,
  },

  title: {
    type: String,
  },

  content: {
    type: String,
  },

  imageUrl: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports.Blog = Blog;
