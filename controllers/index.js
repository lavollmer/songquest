
// ***
// make sure to add in all require statements in all routes later
// ***

const router = require('express').Router();

// import all api route files here
const userApiRoutes = require('./api/user.api.routes');

// import all html route files here

const userHtmlRoutes = require('./html/profile.route');

const songHtmlRoutes = require('./html/song.route');

const restHtmlRoutes = require('./html/rest.route');

const questHtmlRoutes = require('./html/quest.route');

// add api routes to the router

router.use('/api/user', userApiRoutes);

// add html routes to the router
router.use('/profile', userHtmlRoutes)

router.use('/song', songHtmlRoutes)

router.use('/rest', restHtmlRoutes)

router.use('/quest', questHtmlRoutes)

module.exports = router;