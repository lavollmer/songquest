const router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    const restData = await req.body; // I think this should work, might need to check later
    // make an if/else that checks to see if there are any favorited songs and display them if so
    // res.render(../../views/rest-option)
  }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }})

module.exports = router;