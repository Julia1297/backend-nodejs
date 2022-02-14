const express = require('express');
const router = express.Router();

const mobilities = require('../controllers/mobilities.controller');

// Note: this route is actually /albums due to our index.js setup
router.get('/', mobilities.getAllMobilities);

module.exports = router;