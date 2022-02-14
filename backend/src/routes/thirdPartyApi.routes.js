let thirdPartyApiService = require('../services/thirdPartyApi.service');
let thirdPartyApiController = require('../controllers/thirdPartyApi.controller');

module.exports = function(app, db) {
   /* app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });*/
    thirdPartyApiService = thirdPartyApiService('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    console.log("typeof route", typeof thirdPartyApiService.callOtherApi);
    thirdPartyApiController = thirdPartyApiController(thirdPartyApiService);
     app.get(
        "/api/thirdApi",
        thirdPartyApiController.callWithRequest
      );
  };
  
