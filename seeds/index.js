const seedUsers = require("./userData");
const seedPosts = require("./postData");
const seedComments = require("./commentData");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  try {
    await seedUsers().then(() => {
      console.log("\x1b[32m", "<---- SEED USERS DONE! ---->");
    });

    await seedPosts().then(() => {
      console.log("\x1b[32m", "<---- SEED POSTS DONE! ---->");
    });

    await seedComments().then(() => {
      console.log("\x1b[32m", "<---- SEED COMMENTS DONE! ---->");
    });
  } catch (err) {
    err ? console.log(err) : console.log("\x1b[32m", "<---- SEEDING SUCCESSFUL!!! ---->");
  }
};

seedAll();
