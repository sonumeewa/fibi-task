const express = require('express');
const router = express.Router();

// @route    GET api/images
// @desc     Get Images
// @access   Public
router.get('/', async (req, res) => {
  try {
    res.send('<h1>API for fibi task</h1>');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
