const express = require("express");

const router = express.Router();

const Cars = require("./cars-model");

router.get("/", (req, res) => {
  Cars.getCars()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
