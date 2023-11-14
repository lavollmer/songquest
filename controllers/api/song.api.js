

const router = require('express').Router();
const Model = require('../../models/Song');

// const Model = User

// this should be getting ?? (all songs by user id?)
router.get('/', async (req, res) => {
  
})

// this should be connected to the "create a song" button
router.post('/', async (req, res) => {
  try {
    const payload = await Model.create(req.body);
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})

// const newProject = await Project.create({
//   ...req.body,
//   user_id: req.session.user_id,
// });

// this should be connected to the "delete this song" button
// passing in the entire song for req
router.delete('/:id', async (req, res) => {
  try {
    const payload = await Model.destroy({
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