'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Nurseries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      prefecture: {
        type: Sequelize.STRING,
      },
      city:{
        type: Sequelize.STRING,
      },
      corporation: {
        type: Sequelize.STRING,
      },
  
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Nurseries');
  }
};

