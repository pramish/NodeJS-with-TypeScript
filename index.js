const express = require("express");

const app = express();

const {
    CreatePostController,
} = require("./src/controllers/CreatePost.Controller");
const {GetAllPostsController} = require("./src/controllers/GetAllPosts.Controller");

app.use(express.json());

// Get all posts
app.get("/api/v1/posts", GetAllPostsController)
    // Create Post controller
    .post("/api/v1/posts", CreatePostController);


module.exports = {app};
