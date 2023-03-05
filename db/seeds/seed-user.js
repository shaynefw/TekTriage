const { User } = require('./../../models');

const userData = [
  {
    username: 'tekuser1',
    password: 'password123'
  },
  {
    username: 'tekuser2',
    password: 'password456'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
