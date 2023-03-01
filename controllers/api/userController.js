const router = require("express").Router();
const { User } = require("../../models");

// Create new user
router.post("/", async (req, res) => {
  try {
    const userCData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    const userId = userCData.get({ plain: true }).id;
    req.session.save(() => {
      req.session.loggedIn = true; 
      req.session.user_id = userId; 
      res.status(200).json(userCData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}); // End of router.post

// Login
router.post("/login", async (req, res) => {
  try {
    const userCData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!userCData) {
      res
        .status(400)
        .json({ message: "Incorrect username. Please try again!" });
      return;
    }
    const validPassword = await userCData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }
    const userId = userCData.get({ plain: true }).id;
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userId; 
      res
        .status(200)
        .json({ user: userCData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}); // End of router.post

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
}); // End of router.post

module.exports = router;
