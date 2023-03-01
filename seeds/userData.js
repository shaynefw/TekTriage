const { User } = require('../models');

const userData = [
    {
        username: 'tekuser1',
        password: 'password',
    },
    {
        username: 'tekuser2',
        password: 'password',
    },
    {
        username: 'tekuser3',
        password: 'password',
    },
    {
        username: 'tekuser4',
        password: 'password',
    },
    {
        username: 'tekuser5',
        password: 'password',
    },
    {
        username: 'admin',
        password: 'adminpassword',
    }
];

const seedUsers = () => User.bulkCreate(userData); // This is the function that will be called by the seedAll function in seed.js

module.exports = seedUsers;