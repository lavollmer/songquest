const router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    // generate the page for the random button and search area
    // res.render(../../views/quest-option)
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }})

module.exports = router;