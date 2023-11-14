
// ***
// make sure to add in all require statements in all routes later
// ***

const router = require('express').Router();

// import all api route files here
const profileApiRoutes = require('./api/profile.api');
const songApiRoutes = require('./api/song.api');
const commentApiRoutes = require('./api/comment.api');
const userApiRoutes = require('./api/user-routes');

router.use('/api/profile', profileApiRoutes);
router.use('/api/song', songApiRoutes);
router.use('/api/comment', commentApiRoutes);
router.use('/api/user', userApiRoutes);


module.exports = router;