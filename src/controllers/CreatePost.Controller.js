const CreatePostController = async (request,response) => {
    console.log(`Getting request body ${JSON.stringify(request.body)}`)

    const title = request.body.title;
    const description = request.body.description;

    return response.status(200).json({
        message: "Post created successfully",
    })
}

module.exports = {CreatePostController};