'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../server.js'); // Use the sequelize instance from server.js

class Favorite extends Model {}

Favorite.init({
  user_id: DataTypes.STRING,
  nursery_id: DataTypes.INTEGER,
},
 { sequelize, modelName: 'Favorite', timestamps: false });

module.exports = Favorite;
