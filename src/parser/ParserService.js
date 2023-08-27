function parsePosts(posts) {
  return posts.map((post) => {
    return {
      _id: post._id,
      title: post.title,
      description: post.description,
    };
  });
}

function parsePost(post) {
  return {
    _id: post._id,
    title: post.title,
    description: post.description,
  };
}

module.exports = {
  parsePosts,
  parsePost,
};
