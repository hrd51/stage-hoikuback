'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Favorites', [
      {
        user_id: 'user_x',
        nursery_id: 1,
      },
      {
        user_id: 'user_y',
        nursery_id: 2,
      },
      {
        user_id: 'user_z',
        nursery_id: 3,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Favorites', null, {});
  }
};
