const express = require('express');
const { Router } = require('express');

const clientRoutes = require('./clients.routes');
const mobilityRoutes = require('./mobilities.routes');


module.exports = function(db) {
  const app = Router();
  console.log("index routes");
  clientRoutes(app, db);
  return app;
}
/*
router.use('/clients', clients);
router.use('/mobilities', mobilities);
*/
