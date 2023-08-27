const { CreatePost } = require("../helper/CreatePost");

const CreatePostController = async (request, response) => {
  console.log(`Getting request body ${JSON.stringify(request.body)}`);

  const title = request.body.title;
  const description = request.body.description;

  const { message, statusCode } = await CreatePost(title, description);
  return response.status(statusCode).json({
    message,
  });
};

module.exports = { CreatePostController };
