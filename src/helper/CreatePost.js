const {PostModel} = require('../schema/Post.Schema');

async function CreatePost(title, description) {
    try {
        const newPost = new PostModel({
            title,
            description
        });

        const newPostData = await newPost.save();

        if (!newPostData._id) {
            return {
                message: "Post not created",
                statusCode: 400,
            }
        }


        return {
            message: "Post created successfully",
            statusCode: 200,
        }
    } catch (error) {
        console.error(`Error occurred while creating post ${JSON.stringify({error})}`)
        return {
            message: `Internal server error ${JSON.stringify({error})}`,
            statusCode: 500,
        }
    }
}

module.exports = {
    CreatePost
}