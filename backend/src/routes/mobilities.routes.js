let mobilitiesService = require('../services/mobilities.service');
let mobilitiesController = require('../controllers/mobilities.controller');

module.exports = function(app, db) {
    /*app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });*/
    mobilitiesService = mobilitiesService(db);
    mobilitiesController = mobilitiesController(mobilitiesService)
     app.get(
        "/api/mobilities",
        mobilitiesController.getAllClients
      );
    app.post(
        "/api/mobilities",
        mobilitiesController.createMobility
      );
  };
  
