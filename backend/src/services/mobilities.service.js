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
        },
        async getMobilitiesByClient(clientId) {
            const mobilitiesFound = await mobilities.findAll({
                where: { 
                    client_id: clientId 
                }
            });
            return mobilitiesFound;
        }
    };
}