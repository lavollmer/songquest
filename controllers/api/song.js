
const { Song } = require('../../models');
const router = require('express').Router();


// const Model = User

// this should be getting ?? (all songs by user id?)

router.get('/', async (req, res) => {
  const songsData = await Song.findAll({ where: { user_id: req.session.user_id } });
  const Songs = songsData.map((song) => {
    song.get({ plain: true })
  })
  console.log(songs)
  res.render("song", Songs)

})

// this should be connected to the "create a song" button
router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const payload = await Song.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})


// this should be connected to the "delete this song" button
// passing in the entire song for req
router.delete('/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const payload = await Song.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!payload) {
      res.status(404).json({ message: 'No song found with this id!' });
      return;
    }

    res.status(200).json({ status: 'You destroyed the thing!' })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})

module.exports = router;