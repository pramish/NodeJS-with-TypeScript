const {GetOnePost} = require('../helper/GetOnePost');

const GetOnePostController = async (request, response) => {
    console.log("Getting one post", request.params.postId);

    const postId = request.params.postId;

    const {message, statusCode,post} = await GetOnePost(postId);
    return response.status(statusCode).json({
        message,
        post
    })
}

module.exports = {GetOnePostController};