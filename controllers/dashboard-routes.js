const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// RENDER dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User }]
    });
    const commentData = await Comment.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render('dashboard', {
      posts,
      comments,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// RENDER edit post page
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    const post = postData.get({ plain: true });

    res.render('edit-post', {
      post,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// RENDER new post page
router.get('/new', async (req, res) => {
  res.render('new-post', {
    logged_in: true
  });
});

module.exports = router;
