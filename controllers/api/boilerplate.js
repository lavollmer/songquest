const router = require('express').Router();
const Model = require('../../db/User');

// const Model = User

// get all records
router.get('/', async (req, res) => {
  try {
    const payload = await Model.findAll();
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})

// get one record by pk
router.get('/:id', async (req, res) => {
  try {
    const payload = await Model.findByPk(req.params.id);
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})

// create a new record
router.post('/', async (req, res) => {
  try {
    const payload = await Model.create(req.body);
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})

// update a record
router.put('/:id', async (req, res) => {
  try {
    const payload = await Model.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.status(200).json({ status: 'success', payload })
  } catch (err) {
    res.status(500).json({ status: 'error', sendback: err.message })
  }
})

// delete a record
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