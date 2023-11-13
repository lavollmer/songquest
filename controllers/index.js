
// ***
// make sure to add in all require statements in all routes later
// ***

const router = require('express').Router();

// import all api route files here
const profileApiRoutes = require('./api/profile.api');
const songApiRoutes = require('./api/song.api');
const commentApiRoutes = require('./api/comment.api');

// import all html route files here

const userHtmlRoutes = require('./html/profile.route');

const songHtmlRoutes = require('./html/song.route');

// const restHtmlRoutes = require('./html/rest.route');

// const questHtmlRoutes = require('./html/quest.route');

// add api routes to the router

router.use('/api/profile', profileApiRoutes);
router.use('/api/song', songApiRoutes);
router.use('/api/comment', commentApiRoutes);

// add html routes to the router
router.use('/profile', userHtmlRoutes)

router.use('/song', songHtmlRoutes)

// router.use('/rest', restHtmlRoutes)

// router.use('/quest', questHtmlRoutes)

module.exports = router;