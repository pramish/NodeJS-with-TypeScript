const mongoose = require("mongoose");

const { PostModel } = require("../schema/Post.Schema");

const { parsePost } = require("../parser/ParserService");

async function GetOnePost(postId) {
  try {
    console.log("postId", new mongoose.Types.ObjectId(postId));

    const postsData = await PostModel.findById({
      _id: new mongoose.Types.ObjectId(postId),
    });

    if (!postsData._id) {
      console.error("No post found");

      return {
        message: "No post found",
        statusCode: 404,
      };
    }

    const parsedPostData = parsePost(postsData);

    return {
      message: "Post retrieved successfully",
      statusCode: 200,
      post: parsedPostData,
    };
  } catch (error) {
    console.error(
      `Error occurred while fetching one post ${JSON.stringify({ error })}`
    );
    return {
      message: `Internal server error ${JSON.stringify({ error })}`,
      statusCode: 500,
    };
  }
}

module.exports = {
  GetOnePost,
};
