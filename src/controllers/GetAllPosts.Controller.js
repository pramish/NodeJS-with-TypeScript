const {GetAllPosts} = require('../helper/GetAllPosts');

const GetAllPostsController = async (request, response) => {
    console.log("Getting all posts");

    const {message, statusCode,posts} = await GetAllPosts();
    return response.status(statusCode).json({
        message,
        posts
    })
}

module.exports = {GetAllPostsController};