const express = require("express");

const app = express();

const {
  CreatePostController,
} = require("./src/controllers/CreatePost.Controller");

app.use(express.json());

app.get("/api/v1/posts", (request, response) => {});

// Create Post controller
app.post("/api/v1/posts", CreatePostController);

module.exports = { app };
