const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer1 = (sum, item) => {
    return sum + item.likes;
  };

  const reducer = (item1, item2) => {
    return { likes: item1.likes + item2.likes };
  };

  return blogs.length === 0 ? 0 : blogs.reduce(reducer).likes;
};

const favoriteBlog = (blogs) => {
  let maxLikes = {likes:0};
  for (const iterator of blogs) {
    if (iterator.likes > maxLikes.likes) {
      maxLikes = iterator;
    }
  }
  return maxLikes;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
