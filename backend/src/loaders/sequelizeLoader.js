const dbConfig = require('../configs/db.config');
const Sequelize = require('sequelize');
const models = require('../models');

const init = async () => {
    const sequelize = new Sequelize(process.env.POSTGRESQL_URI, { "define": { "timestamps": false } });
    return models(sequelize);
}

module.exports = init;
