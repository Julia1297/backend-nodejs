let changesService = require('../services/changes.service');
let changesController = require('../controllers/changes.controller');

module.exports = function(app, db) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    changesService = changesService(db);
    changesController = changesController(changesService)
    app.get(
        "/api/changes",
        changesController.getChangesByMobility
      );
    app.post(
        "/api/changes",
        changesController.createChange
      );
  };
  
