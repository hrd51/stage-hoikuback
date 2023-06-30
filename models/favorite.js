'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Use the sequelize instance from sequelize.js
const Nursery = require('../models/nursery'); // 'Nursery' model is imported

class Favorite extends Model {}

Favorite.init({
  user_id: DataTypes.STRING,
  nursery_id: DataTypes.INTEGER,
}, { sequelize, modelName: 'Favorite', tableName: 'Favorites', timestamps: false });

Favorite.associate = function(models) {
  // associations can be defined here
  Favorite.belongsTo(models.Nursery, { foreignKey: 'nursery_id' });
};

module.exports = Favorite;
