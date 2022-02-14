module.exports = function (mobilitiesService) {
    return {
        getMobilitiesByClient: async (req, res, next) => {
            try {
                const response = await  mobilitiesService.getMobilitiesByClient(req.query.clientId)
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