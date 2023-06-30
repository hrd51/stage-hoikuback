'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Use the sequelize instance from sequelize.js

class Favorite extends Model {}

module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    // Your existing attributes here...
  }, {});

  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.Nursery, { foreignKey: 'nursery_id' });
  };

  return Favorite;
};


Favorite.belongsTo(Nursery, { foreignKey: 'nursery_id' });
Nursery.hasMany(Favorite, { foreignKey: 'nursery_id' });


Favorite.init({
  user_id: DataTypes.STRING,
  nursery_id: DataTypes.INTEGER,
},
 { sequelize, modelName: 'Favorite', tableName: 'Favorites', timestamps: false });

module.exports = Favorite;
