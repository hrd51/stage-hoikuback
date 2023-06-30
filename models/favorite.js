'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Use the sequelize instance from sequelize.js
const Nursery = require('./nursery'); // Import 'Nursery' model

class Favorite extends Model {}

Favorite.init({
  user_id: DataTypes.STRING,
  nursery_id: DataTypes.INTEGER,
}, { sequelize, modelName: 'Favorite', tableName: 'Favorites', timestamps: false });

Favorite.belongsTo(Nursery, { foreignKey: 'nursery_id' }); // Use imported 'Nursery' model

module.exports = Favorite;
