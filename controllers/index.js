const router = require('express').Router();

const apiController = require('./api');
const homeController = require('./homeController.js');

router.use('/', homeController);
router.use('/api', apiController);

module.exports = router;