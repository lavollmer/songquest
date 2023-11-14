const router = require('express').Router();
const { Song, Comment } = require("../../models")

router.get('/', (req, res) => {
  const chosenSong = req.params.id
  // res.render('../../views/song')
})


router.get('/:id', async (req, res) => {
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
    // 'song' refers to song.handlbar
    res.render('song', { song });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// loggedIn: req.session.loggedIn restricts to logged-in users

module.exports = router;