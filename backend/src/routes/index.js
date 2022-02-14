const { Router } = require('express');

const clientRoutes = require('./clients.routes');
const mobilityRoutes = require('./mobilities.routes');
const changeRoutes = require('./changes.routes');
const thirdPartyApiRoutes = require('./thirdPartyApi.routes');


module.exports = function(db) {
  const app = Router();
  clientRoutes(app, db);
  thirdPartyApiRoutes(app, db);
  mobilityRoutes(app, db);
  changeRoutes(app, db);
  return app;
}
