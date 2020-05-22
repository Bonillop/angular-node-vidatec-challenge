const express = require('express');
const router = express.Router();
const multer = require('multer');
const csv = require('csvtojson');
const Movie = require('../models/movie');

// multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
})

// instantiate multer
const upload = multer({storage: storage});

router.get('/', async function (req, res, next) {
  try {
    const result = await Movie.find();
    if (!result) {
      res.json(404, { data: "Movies not found" });
      return;
    }
    res.status(200).json({ data: result });
  } catch (e) {
    console.error(e);
    res.status(500).json({error: e});
  }
});

router.post('/', upload.single('file'), function (req, res, next) {
  console.log(req.file);
  csv({
    delimiter: ";"
  })
  .fromFile(req.file.path)
  .then((json) => {
    Movie.insertMany(json, (err, data) => {
      if(err){
        console.log(err)
      } else {
        console.log(data)
      }
    })
  })
  res.status(200).json({ data: req.file });
});

module.exports = router;
