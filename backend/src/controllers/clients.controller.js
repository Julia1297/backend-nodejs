module.exports = function (clientsService) {
  return {
    getAllClients: async (req, res, next) => {
      console.log("holis")
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
}/*
module.exports = db => {
    getAllClients(req, res) {
      return res.send({ data: 'reached /clients index route!' });
    },
  };*/