const seedUsers = require("./seed-user");
const seedPosts = require("./seed-post");
//const seedComments = require("./commentData");
const sequelize = require("./../../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  try {
    await seedUsers().then(() => {
      console.log("\x1b[32m", "<---- USERS SEEDED SUCCESSFULLY !!! ---->");
    });

    await seedPosts().then(() => {
      console.log("\x1b[32m", "<---- POSTS SEEDED SUCCESSFULLY !!! ---->");
    });

    // await seedComments().then(() => {
    //   console.log("\x1b[32m", "<---- SEED COMMENTS DONE! ---->");
    // });
  } catch (err) {
    err ? console.log(err) : console.log("\x1b[32m", "<---- SEEDING SUCCESSFUL!!! ---->");
  }
};

seedAll();
