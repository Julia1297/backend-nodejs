const express = require('express');
const { Router } = require('express');

const clientRoutes = require('./clients.routes');
const mobilityRoutes = require('./mobilities.routes');
const thirdPartyApiRoutes = require('./thirdPartyApi.routes');


module.exports = function(db) {
  const app = Router();
  clientRoutes(app, db);
  thirdPartyApiRoutes(app, db);
  return app;
}
/*
router.use('/clients', clients);
router.use('/mobilities', mobilities);
*/
