const router = require('express').Router();
const commentRoute = require('./commentRoutes');
const contributorsRoutes = require('./contributors-routes');
const userPostRoutes = require('./userPostRoutes');
const userRoutes = require('./userRoutes');

router.use('/comment', commentRoute);
router.use('/contributors', contributorsRoutes);
router.use('/user_post', userPostRoutes);
router.use('/users', userRoutes);

module.exports = router;