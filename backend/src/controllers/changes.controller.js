module.exports = function (changesService) {
    return {
        getChangesByMobility: async (req, res, next) => {
            try {
                const response = await  changesService.getChangesByMobility(req.query.mobilityId)
                return res.status(200).json(response); 
            } catch (error) {
                next(error);
            }
        },
        createChange: async (req, res, next) => {
            try {
                const change = req.body.change;
                const response = await  changesService.createChange(change)
                return res.status(200).json(response); 
            } catch (error) {
                next(error);
            }
        }          
    };
  }