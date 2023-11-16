
const router = require('express').Router();

const profileApiRoutes = require('./api/profile.api');
const songApiRoutes = require('./api/song');
const commentApiRoutes = require('./api/comment');
const userApiRoutes = require('./api/user-routes');
const homeRoutes = require('./homeRoutes')

router.use('/api/profile', profileApiRoutes);
router.use('/api/song', songApiRoutes);
router.use('/api/comment', commentApiRoutes);
router.use('/api/users', userApiRoutes);
router.use('/', homeRoutes)

module.exports = router;