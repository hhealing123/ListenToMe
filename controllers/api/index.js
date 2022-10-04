const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const contributorsRoutes = require('./contributors-routes.js');
const apiRoutes = require('./api');

router.use('/contributors', contributorsRoutes);
router.use('/', userRoutes);
router.use('/api', apiRoutes)

module.exports = router;