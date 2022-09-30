const router = require('express').Router();

const userRoutes = require('./user-routes.js');

const contributorsRoutes = require('./contributors-routes.js');

router.use('/', contributorsRoutes);

router.use('/', userRoutes);

module.exports = router;
