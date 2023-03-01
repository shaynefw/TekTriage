// create dummy post data
const { Post } = require('../models');

const postdata = [
    {
        title: 'Why is my screen black?',
        content: 'All it says is no signal! HELP!',
        user_id: 1,
    },
    {
        title: 'My computer is running slow',
        content: 'I have a 2019 MacBook Pro and it is running slow. What can I do?',
        user_id: 2,
    },
    {
        title: 'I am getting a blue screen of death',
        content: 'I am getting a blue screen of death. What can I do?',
        user_id: 4,
    },
    {
        title: 'Why are my keys not working?',
        content: 'when I press the keys on my keyboard, nothing happens. What can I do?',
        user_id: 4,
    },
    {
        title: 'I forgot my password',
        content: 'I cannot remember my password. What can I do?',
        user_id: 2,
    },
    {
        title: 'What do you all think of the support?',
        content: 'I think the support is great!',
        user_id: 6,
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
