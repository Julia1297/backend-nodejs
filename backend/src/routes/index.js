const express = require('express');
const router = express.Router();

const clients = require('./clients');
const mobilities = require('./mobilities');

router.use('/clients', clients);
router.use('/mobilities', mobilities);

module.exports = router;
