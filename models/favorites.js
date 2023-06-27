'use strict';
const { Sequelize, Model, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

class Favorite extends Model {}

Favorite.init({
  user_id: DataTypes.STRING,
  nursery_id: DataTypes.INTEGER,
},
 { sequelize, modelName: 'Favorite', timestamps: false });

module.exports = Favorite;
