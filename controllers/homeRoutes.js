const router = require('express').Router();
const { Song, Comment } = require("../models")

router.get('/', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

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
    res.render('song', song );
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;