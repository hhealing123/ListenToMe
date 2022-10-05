const router = require('express').Router();
<<<<<<< HEAD
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
=======
const commentRoute = require('./commentRoutes');
const contributorsRoutes = require('./contributors-routes');
const userPostRoutes = require('./userPostRoutes');
const userRoutes = require('./user-routes');

router.use('/comment', commentRoute);
router.use('/contributors', contributorsRoutes);
router.use('/user_post', userPostRoutes);
router.use('users', userRoutes);
>>>>>>> controllers-(server.js/routing)

module.exports = router;