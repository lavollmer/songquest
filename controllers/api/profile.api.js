const router = require('express').Router();
const Model = require('../../models/User');

// this should be connected to the "create a song" button
router.post('/', async (req, res) => {
  try {
    const payload = await Model.create(req.body);
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})

// this should be connected to the "delete this song" button
// passing in the entire song for req
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