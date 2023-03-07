const router = require('express').Router();
const { Comment } = require('../../models');

//get all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get comments by user id
// router.get('/:id', async (req, res) => {
//   try {
//     const commentData = await Comment.findAll({
//       where: { user_id: req.params.id }
//     });

//     console.log(commentData)

//     if (!commentData) {
//       res.status(404).json({ message: 'No comment found with this id!' });
//       return;
//     }

//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// CREATE new comment
router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE comment
router.put('/:id', async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: { id: req.params.id }
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE comment
router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: { id: req.params.id }
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
