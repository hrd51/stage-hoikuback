'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Nurseries', [
      {
        name: 'サンプル保育園',
        prefecture: '東京都',
        city: '渋谷区',
        operator: '株式会社',
        salary:"月給20万〜",
        employmentType:"正社員",
        
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Nurseries', null, {});
  }
};
