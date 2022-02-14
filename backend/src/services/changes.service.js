const Op = require('sequelize').Op;

module.exports = function (db) {
    let changes =  db.changes;
    return {
        async createChange(change) {
            try {   
                const changeCreated = await changes.create(change);
                return changeCreated;
            }
            catch (error) {
                return error;
            }
        },

        async getChangesByMobility(mobilityId) {
            const changesFound = await changes.findAll({
                where: { 
                    mobility_id: mobilityId 
                }
            });
            return changesFound;
        }
    };
}