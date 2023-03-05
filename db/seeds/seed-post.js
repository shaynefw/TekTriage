const { Post } = require('../models');

const postData = [
  {
    title: 'First Post',
    contents: 'This is the first post.',
    user_id: 1
  },
  {
    title: 'Second Post',
    contents: 'This is the second post.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
