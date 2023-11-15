const router = require('express').Router();
const { Song, Comment } = require("../models")
//require in withAuth utils folder (code taken from Activity 23 Unit MVC)
const withAuth = require('../utils/auth');

//render login handlebars template
<<<<<<< HEAD
//
router.get('/', async (req, res) => { // withAuth before async,
  try {
    // const userAuth = await User.findAll({
    //   attributes: ({ username, password })
    // });
    // // taking returned data of userAuth and changing it from an array to plain text
    // const userLoggedIn = userAuth.map((userDataTwo) => userDataTwo.get({ plain: true }))
    // // render the login handlebars template with the 2nd argument of the plain text data and logged_In status of yes
    res.render('login', {
      // userLoggedIn,
      // logged_in: req.session.logged_in,
    }
=======
// withAuth before async,
router.get('/', async (req, res) => {
  try {
    //const userAuth = await User.findAll({
       //attributes: ({ username, password })
     //});
    //taking returned data of userAuth and changing it from an array to plain text
    //const userLoggedIn = userAuth.map((userDataTwo) => userDataTwo.get({ plain: true }))
    //render the login handlebars template with the 2nd argument of the plain text data and logged_In status of yes
    res.render('login', //{
      //userLoggedIn,
      //logged_in: req.session.logged_in,
      //}
>>>>>>> main
    )
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message)
  }
})



//render signup handlebars template
router.get('/signup', (req, res) => {
  res.render('signup')
})

//render profile handlebars template
// router.get('/profile', (req, res) => {
//   res.render('profile')
// })

router.get('/profile', withAuth, async (req, res) => {
  try {
    const songsData = await Song.findAll({
      where: { user_id: req.session.user_id },
      include: { model: Comment }
    });
    const songs = songsData.map((song) => song.get({ plain: true }))
    console.log(songs)
    res.render('profile', { songs, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
})

//render profile handlebars template
// router.get('/profile', (req, res) => {
//   res.render('profile')
// })

// router.get('/profile', async (req, res) => {
//   const songsData = await Song.findAll({ where: { user_id: req.session.user_id } });
//   const Songs = songsData.map((song) => {
//     song.get({ plain: true })
//   })
//   console.log(songs)
//   res.render("song", Songs)

// })

// unused at present, useful for reference
router.get('/song/:id', async (req, res) => {
  try {
    const dbSongData = await Song.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          // attributes: [
          //   'id',
          //   'title',
          //   'artist',
          //   'exhibition_date',
          //   'filename',
          //   'description',
          // ],
        },
      ],
    });

    const song = dbSongData.get({ plain: true });
    console.log(song)
    // 'song' refers to song.handlbar
    res.render('song', song);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})


module.exports = router;