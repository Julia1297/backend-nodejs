const Op = require('sequelize').Op;

module.exports = function (db) {
    let clientModel =  db.clients;
    return {
        async findAllClients(){
            try {   
                const clients = await clientModel.findAll();
                return clients;
            }
            catch (error) {
                return error;
            }
        },
        async createClient(client) {
            try {   
                const createdClient = await clientModel.create(client);
                return createdClient;
            }
            catch (error) {
                return error;
            }
        },
        async findClientById(id) {
            const clientFound = await clientModel.findOne({
                where: {
                    id
                }
            });
            return clientFound;
        },
        async deleteClientById(id) {
            const response = await clientModel.destroy({
                where: {
                    id
                }
            });
            console.log(response);
            
            return response;
        },        
        async updateClient(client) {
            const response = await clientModel.update(client, {
                where: {
                    id: client.id 
                }
            });
            return response;
        }
    };
}