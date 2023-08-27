const { PostModel } = require("../schema/Post.Schema");

async function UpdatePost(postId, title, description) {
  try {
    const updatedPostData = await PostModel.findByIdAndUpdate(
      postId,
      {
        title,
        description,
      },
      {
        new: true,
      }
    );

    if (!updatedPostData._id) {
      return {
        message: "Post not found",
        statusCode: 404,
      };
    }

    return {
      message: "Post updated successfully",
      statusCode: 200,
    };
  } catch (error) {
    console.error(
      `Error occurred while creating post ${JSON.stringify({ error })}`
    );
    return {
      message: `Internal server error ${JSON.stringify({ error })}`,
      statusCode: 500,
    };
  }
}

module.exports = {
  UpdatePost,
};
