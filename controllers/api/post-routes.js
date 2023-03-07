const router = require('express').Router();
const { Post } = require('../../models');


// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new post
router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE post
router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: { id: req.params.id }
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE post
router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: { id: req.params.id }
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
