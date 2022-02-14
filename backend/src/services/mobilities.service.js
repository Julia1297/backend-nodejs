const Op = require('sequelize').Op;

module.exports = function (db) {
    let mobilities =  db.mobilities;
    return {
        async createMobility(mobility) {
            try {   
                const mobilityCreated = await mobilities.create(mobility);
                return mobilityCreated;
            }
            catch (error) {
                return error;
            }
        }
       /*,
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
        }*/
    };
}