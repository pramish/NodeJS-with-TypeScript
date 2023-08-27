const express = require("express");

const app = express();

const {
  CreatePostController,
} = require("./src/controllers/CreatePost.Controller");
const {
  GetAllPostsController,
} = require("./src/controllers/GetAllPosts.Controller");
const {
  GetOnePostController,
} = require("./src/controllers/GetOnePost.Controller");
const {
  DeletePostController,
} = require("./src/controllers/DeletePost.Controller");

app.use(express.json());

app
  // Get one post
  .get("/api/v1/posts/post/:postId", GetOnePostController)
  // Get all posts
  .get("/api/v1/posts", GetAllPostsController)
  // Delete post
  .delete("/api/v1/posts/post/:postId", DeletePostController)
  // Create Post controller
  .post("/api/v1/posts", CreatePostController);

module.exports = { app };
