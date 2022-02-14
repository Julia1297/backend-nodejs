const expressLoader = require('./expressLoader');
const sequelizeLoader = require('./sequelizeLoader');


const init = async ({ expressApp }) => {
    const sequelizeDB = await sequelizeLoader();
    console.log('DB loaded and connected');
  
    await expressLoader({ app: expressApp, db: sequelizeDB });
    console.log('Express loaded');
};

module.exports = init;
