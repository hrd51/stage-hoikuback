'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Nurseries', [
      {
        name: 'サンプル保育園',
        prefecture: '東京都',
        city: '新宿区',
        corporation: 'サンプル法人',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Nurseries', null, {});
  }
};
