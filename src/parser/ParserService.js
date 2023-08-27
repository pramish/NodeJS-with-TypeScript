class ParserService {
    static parsePosts(posts) {
        return posts.map(post => {
            return {
                _id: post._id,
                title: post.title,
                description: post.description
            }
        })
    }
}

module.exports = {
    ParserService
}