const express = require('express');
const router = express.Router();

const clients = require('../controllers/clients');

// Note: this route is actually /albums due to our index.js setup
router.get('/', clients.getAllClients);

module.exports = router;