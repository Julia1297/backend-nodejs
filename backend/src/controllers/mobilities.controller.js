module.exports = function (mobilitiesService) {
    return {
      getAllClients: async (req, res, next) => {
        console.log("holis")
        try {
          const response = await  mobilitiesService.findAllClients()
          return res.status(200).json(response); 
        } catch (error) {
          next(error);
        }
      },
      createMobility: async (req, res, next) => {
        try {
          const mobility = req.body.mobility;
          const response = await  mobilitiesService.createMobility(mobility)
          return res.status(200).json(response); 
        } catch (error) {
          next(error);
        }
      }          
    };
  }