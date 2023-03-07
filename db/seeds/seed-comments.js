const { Comment } = require('./../../models');

const commentData = [
  {
    contents: 'Great post!',
    user_id: 1,
    post_id: 1,
  },
  {
    contents: 'Thanks for sharing!',
    user_id: 2,
    post_id: 1,
  },
  {
    contents: 'I have a question about this topic.',
    user_id: 3,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
