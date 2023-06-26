'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Nurseries', [
      {
        name: 'サンプル保育園A',
        prefecture: '東京',
        city: '渋谷区',
        operator: '株式会社',
        salary:"月給20万〜",
        employmentType:"正社員",
        homepage:"https://example.com"
      },
      {
        name: 'サンプル保育園B',
        prefecture: '神奈川',
        city: '横浜市',
        operator: '社会福祉法人',
        salary:"月給30万〜",
        employmentType:"正社員",
        homepage:"https://example1.com"
      },
      {
        name: 'サンプル保育園C',
        prefecture: '千葉',
        city: '千葉市',
        operator: '株式会社',
        salary:"月給40万〜",
        employmentType:"正社員",
        homepage:"https://example2.com"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Nurseries', null, {});
  }
};
