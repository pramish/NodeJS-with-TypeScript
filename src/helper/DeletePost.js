const mongoose = require("mongoose");

const { PostModel } = require("../schema/Post.Schema");

async function DeletePost(postId) {
  try {
    const postsData = await PostModel.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(postId),
    });

    if (!postsData._id) {
      console.error("No post found");

      return {
        message: "No post found",
        statusCode: 404,
      };
    }

    return {
      message: "Post deleted successfully",
      statusCode: 200,
    };
  } catch (error) {
    console.error(
      `Error occurred while deleting post ${JSON.stringify({ error })}`
    );
    return {
      message: `Internal server error ${JSON.stringify({ error })}`,
      statusCode: 500,
    };
  }
}

module.exports = {
  DeletePost,
};
