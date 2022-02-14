const Op = require('sequelize').Op;

module.exports = function (db) {
    let clientModel =  db.clients;
    return {
        async findAllClients(){
            console.log("-------------", clientModel)

            try {   
                const clients = await clientModel.findAll();
                return clients;
            }
            catch (error) {
                return error;
            }
        },
        async createClient(client) {
            console.log("-------------", clientModel)

            try {   
                const createdClient = await clientModel.create(client);
                return clients;
            }
            catch (error) {
                return error;
            }
        },
        async findClientByName(name) {
            const clientsFound = await this.clientModel.findAll({
                where: {
                  name: {
                    [Op.substring] : name
                  }
                }
            });
            return clientsFound;
        },
    
        async findClientById(id) {
            const clientFound = await this.clientModel.findOne({
                where: {
                    id
                }
            });
            return clientFound;
        },
    
        async deleteClientById(id) {
            const response = await this.clientModel.destroy({
                where: {
                    id
                }
            });
            return response;
        },
    
        async updateClient(id, client) {
            const response = await this.clientModel.update(client, {
                where: {
                    id
                }
            });
        }
    };
}
/*
class ClientService {
    constructor(clientModel) {
        this.clientModel = clientModel;
    }

    async createClient(client) {
        const createdClient = await this.clientModel.create(client);
        return createdClient;
    }

    async findClientByName(name) {
        const clientsFound = await this.clientModel.findAll({
            where: {
              name: {
                [Op.substring] : name
              }
            }
        });
        return clientsFound;
    }

    async findClientById(id) {
        const clientFound = await this.clientModel.findOne({
            where: {
                id
            }
        });
        return clientFound;
    }

    async deleteClientById(id) {
        const response = await this.clientModel.destroy({
            where: {
                id
            }
        });
        return response;
    }

    async updateClient(id, client) {
        const response = await this.clientModel.update(client, {
            where: {
                id
            }
        });
    }
};

module.exports = ClientService;
*/