const router = require('express').Router();
const Model = require('../../models/Comment');


// this should be connected to the "create a song" button
router.post('/:id', async (req, res) => {
  try {
    const payload = await Model.create({
      ...req.body,
      user_id: req.session.user_id,
      author: req.session.username,
      song_id: req.params.id
    });
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})


router.delete('/:id', async (req, res) => {
  try {
    const payload = await Model.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ status: 'success' })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})

module.exports = router;