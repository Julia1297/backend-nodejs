module.exports = (sequelize, Sequelize) => {
    const Change = sequelize.define("changes", {
      date: {
        type: Sequelize.STRING(50),
      },
      km: {
        type: Sequelize.STRING(50),
      },
      notes: {
        type: Sequelize.STRING(150),
      },
      mobility_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {        
          model: 'mobilities',
          key: 'id'
        }
      }
    });
    return Change;
  };