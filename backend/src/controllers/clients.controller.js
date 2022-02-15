module.exports = function (clientsService) {
  return {
    getAllClients: async (req, res, next) => {
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
    },
    findClientById: async (req, res, next) => {
      try {
        const response = await  clientsService.findClientById(req.params.id)
        return res.status(200).json(response); 
      } catch (error) {
        next(error);
      }
    },
    deleteClientById: async (req, res, next) => {
      try {
        console.log(req.params.id)
        const response = await clientsService.deleteClientById(req.params.id)
        return res.status(200).json(response); 
      } catch (error) {
        next(error);
      }
    },
    updateClient: async (req, res, next) => {
      try {
        const client = req.body.client;
        const response = await  clientsService.updateClient(client)
        return res.status(200).json(response); 
      } catch (error) {
        next(error);
      }
    },          
  };
}