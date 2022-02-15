module.exports = (sequelize, Sequelize) => {
    const Mobility = sequelize.define("mobilities", {
      brand: {
        type: Sequelize.STRING(50),
      },
      model: {
        type: Sequelize.STRING(50),
      },
      license_plate: {
        type: Sequelize.STRING(50),
      },
      number_doors: {
        type: Sequelize.INTEGER,
      },
      client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {        
          model: 'clients',
          key: 'id'
        }
      }
    });
    return Mobility;
  };