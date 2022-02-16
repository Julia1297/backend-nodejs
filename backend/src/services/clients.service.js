const Op = require('sequelize').Op;

module.exports = function (db) {
    let clientModel =  db.clients;
    return {
        async findAllClients(filters){
            try {   
                let { offset, size } = filters;
                if (!offset) {
                    offset = 0;
                }
                if (!size) {
                    size = 5;
                }
                const limit = parseInt(size);
                const clients = await clientModel.findAll({
                    offset: offset, limit: limit,
                });
                return {
                    offset: clients.length + parseInt(offset),
                    limit: limit,
                    clients: clients
                }
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
            return response;
        },        
        async updateClient(client, id) {
            const response = await clientModel.update(client, {
                where: {
                    id: id
                }
            });
            return response;
        }
    };
}