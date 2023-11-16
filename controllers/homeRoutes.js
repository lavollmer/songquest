const router = require('express').Router();
const { Song, Comment } = require("../models")
//require in withAuth utils folder (code taken from Activity 23 Unit MVC)


router.get('/', async (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message)
  }
})

//render signup handlebars template
router.get('/signup', (req, res) => {
  res.render('signup')
})


router.get('/profile', async (req, res) => {
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


// unused at present, useful for reference for future development
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