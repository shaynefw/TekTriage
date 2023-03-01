const router = require('express').Router();
const userController = require('./userController');
const postController = require('./postController');
const commentController = require('./commentController');

router.use('/user', userController);
router.use('/post', postController);
router.use('/comment', commentController);

module.exports = router;
