const { check, validationResult }= require('express-validator');
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
    app.get("/api/clients", clientsController.getAllClients);
    app.post("/api/clients",/*[
        check('client.name', 'Name length should be 10 to 20 characters').isLength({ min: 5, max: 10 })
    ], (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }*/
        clientsController.createClient
    );
  };
  
