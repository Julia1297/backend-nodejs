//'use-strict';

const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const models = require('../models');

const init = async () => {
    const sequelize = new Sequelize(dbConfig.DB_URI, { "define": { "timestamps": false } });
    return models(sequelize);
}

module.exports = init;
