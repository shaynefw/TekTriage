const { Comment } = require('../models');

const commentdata = [
    {
        content: 'I get that sometimes too. Try restarting your computer.',
        post_id: 1,
        user_id: 2,
    },
    {
        content: 'Check your cables. If that does not work, try restarting your computer.',
        post_id: 1,
        user_id: 6,
    },
    {
        content: 'try running a virus scan',
        post_id: 2,
        user_id: 1,
    },
    {
        content: 'uninstall any unwanted programs.',
        post_id: 2,
        user_id: 6,
    },
    {
        content: 'uhg, that is the worst. Try restarting your computer.',
        post_id: 3,
        user_id: 3,
    },
    {
        content: 'buy a new computer',
        post_id: 5,
        user_id: 4,
    },
    {
        content: 'me too!',
        post_id: 6,
        user_id: 2,
    },
    {
        content: 'I agree',
        post_id: 6,
        user_id: 3,
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
