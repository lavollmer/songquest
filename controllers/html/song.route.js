const router = require('express').Router();


router.get('/', (req, res) => {
  const chosenSong = req.params.id
  // res.render('../../views/song')
})

module.exports = router;

router.get('/:id', async (req, res) => {
  try {
    const dbSongData = await Songs.findByPk(req.params.id, {
      include: [
        {
          model: Comments,
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