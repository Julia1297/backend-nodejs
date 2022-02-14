module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("clients", {
      name: {
        type: Sequelize.STRING(50),
      },
      ci: {
        type: Sequelize.STRING(10),
      }
    });
    return Client;
  };