const Nursery = require('./nursery');
const Favorite = require('./favorite');

module.exports = () => {
  Favorite.belongsTo(Nursery, { foreignKey: 'nursery_id' });
  Nursery.hasMany(Favorite, { foreignKey: 'nursery_id' });
};
