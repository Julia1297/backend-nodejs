let clientsService = require('../services/clients.service');
let clientsController = require('../controllers/clients.controller');

module.exports = function(app, db) {
    /*app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });*/
    clientsService = clientsService(db);
    clientsController = clientsController(clientsService)
    console.log(db.clients)

    console.log(clientsService.db)

    console.log(clientsController.getAllClients)
    app.get(
        "/api/clients",
        clientsController.getAllClients
      );
    app.post(
        "/api/clients",
        clientsController.createClient
      );
  };
  
