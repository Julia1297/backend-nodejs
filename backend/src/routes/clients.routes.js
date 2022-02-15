const validations = require('../validations/client.validation')("a");
let clientsService = require('../services/clients.service');
let clientsController = require('../controllers/clients.controller');

module.exports = function(app, db) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    clientsService = clientsService(db);
    clientsController = clientsController(clientsService)
    console.log("...:", validations.createClientSchema);
    app.get("/api/clients", clientsController.getAllClients);
    app.post("/api/clients", validations.createClientSchema, clientsController.createClient);
  };
  
