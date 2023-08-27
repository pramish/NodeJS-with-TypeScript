const { DeletePost } = require("../helper/DeletePost");

const DeletePostController = async (request, response) => {
  console.log("Getting one post", request.params.postId);

  const postId = request.params.postId;

  const { message, statusCode } = await DeletePost(postId);
  return response.status(statusCode).json({
    message,
  });
};

module.exports = { DeletePostController };
