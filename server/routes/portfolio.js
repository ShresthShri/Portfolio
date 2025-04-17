const express = require('express');
const router = express.Router();
const portfolioData = require('../data/portfolio');

router.get('/', (req, res) => {
  res.json(portfolioData);
});

module.exports = router;
