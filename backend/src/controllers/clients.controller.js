module.exports = function (clientsService) {
  return {
    getAllClients: async (req, res, next) => {
      try {
        const response = await  clientsService.findAllClients(req.query)
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
        let response = await clientsService.deleteClientById(req.params.id)
        if(parseInt(response) > 0){
          response = {message: "The item was deleted successfully."}
        }
        else {
          response = {message: "The item was not found."}
        }
        return res.status(200).json(response); 
      } catch (error) {
        next(error);
      }
    },
    updateClient: async (req, res, next) => {
      try {
        const client = req.body.client;
        const id = req.params.id;
        let response = await  clientsService.updateClient(client, id);
        if(parseInt(response[0]) > 0){
          response = {message: "The item was updated successfully."}
        }
        else {
          response = {message: "The item was not found."}
        }        return res.status(200).json(response); 
      } catch (error) {
        next(error);
      }
    },          
  };
}