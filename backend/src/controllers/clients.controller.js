module.exports = function (clientsService) {
  return {
    getAllClients: async (req, res, next) => {
      console.log("typeof",typeof clientsService.findAllClients);
      try {
        const response = await  clientsService.findAllClients()
        return res.status(200).json(response); 
      } catch (error) {
        next(error);
      }
    },
    createClient: async (req, res, next) => {
      try {
        const client = req.body.client;
        const response = await  clientsService.createClient(client)
        return res.status(200).json(response); 
      } catch (error) {
        next(error);
      }
    }          
  };
}