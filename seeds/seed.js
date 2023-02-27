const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const { User, Blog, Comment } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(seedUsers, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
}

seedDatabase().then(() => {
    console.log('<----- Database seeded users! ----->');
});
