const router = require('express').Router();

// Import all of the API routes from /api/index.js
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes'); 
const userRoutes = require('./user-routes'); 
const apiRoutes = require('./api');

router.use('/', homeRoutes); 
router.use('/dashboard', dashboardRoutes); 
router.use('/user', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;