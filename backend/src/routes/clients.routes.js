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
    clientsController = clientsController(clientsService);

    app.get("/api/clients", validations.validateGetById, clientsController.getAllClients);
    app.post("/api/clients", validations.validateCreateClient, clientsController.createClient);
    app.get("/api/clients/:id",  clientsController.findClientById);
    app.delete("/api/clients/:id", clientsController.deleteClientById);
    app.patch("/api/clients/:id", clientsController.updateClient);
  };
  
