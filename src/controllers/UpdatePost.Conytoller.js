const { UpdatePost } = require("../helper/UpdatePost");

const UpdatePostController = async (request, response) => {
  console.log(`Getting request body ${JSON.stringify(request.body)}`);

  const title = request.body.title;
  const description = request.body.description;

  const postId = request.params.postId;

  const { message, statusCode } = await UpdatePost(postId, title, description);
  return response.status(statusCode).json({
    message,
  });
};

module.exports = { UpdatePostController };
