const service = require('../services/thirdPartyApi.service');

module.exports = function (thirdPartyApiService) {
    return {
        callWithRequest: async (req, res, next) => {
            try {
                console.log(typeof thirdPartyApiService.callOtherApi);
                const response = await  thirdPartyApiService.callOtherApi();
                return res.status(200).json(response); 
            } catch (error) {
                next(error);
            }
      }          
    };
  }