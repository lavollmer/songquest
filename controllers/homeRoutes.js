const router = require('express').Router();
const { Song, Comment } = require("../models")

//render login handlebars template
router.get('/', (req, res) => {
  res.render('login')
})

//render signup handlebars template
router.get('/signup', (req, res) => {
  res.render('signup')
})

//render profile handlebars template
router.get('/profile', (req, res) => {
  res.render('profile')
})

router.get('/profile', async (req, res) => {
  const songsData = await Song.findAll({ where: { user_id: req.session.user_id } });
  const Songs = songsData.map((song) => {
    song.get({ plain: true })
  })
  console.log(songs)
  res.render("song", Songs)

})

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
});

module.exports = router;