const express = require('express');
const router = express.Router();
const Image = require('../models/Image');
const { check, validationResult } = require('express-validator');
// @route    POST api/add_image
// @desc     Add an image
// @access   Public
router.post(
  '/image',
  [
    check('url', 'url is required').not().isEmpty(),
    check('name', 'name is required').not().isEmpty(),
    check('type', 'type is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newImage = new Image({
        type: req.body.text,
        name: req.body.name,
        url: req.body.url,
      });

      const image = await newImage.save();
      res.json(image);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/images
// @desc     Get Images
// @access   Public
router.get('/images', async (req, res) => {
  try {
    const images = await Image.find({ name: req.query.nameString })
      .skip(parseInt(req.query.offset))
      .limit(parseInt(req.query.limit));
    res.json(images);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
