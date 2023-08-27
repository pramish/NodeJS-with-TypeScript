const {PostModel} = require('../schema/Post.Schema');

const {ParserService} = require('../parser/ParserService');

async function GetAllPosts() {
    try {
        const postsData = await PostModel.find();

        if (!postsData.length) {
            console.error("No posts found");

            return {
                message: "No posts found",
                statusCode: 404,
            }
        }

        const parsedPostData = ParserService.parsePosts(postsData);

        console.log(`Posts found ${JSON.stringify({parsedPostData})}`);

        return {
            message: "Post retrieved successfully",
            statusCode: 200,
            posts: parsedPostData
        }
    } catch (error) {
        console.error(`Error occurred while fetching post ${JSON.stringify({error})}`)
        return {
            message: `Internal server error ${JSON.stringify({error})}`,
            statusCode: 500,
        }
    }
}

module.exports = {
    GetAllPosts
}