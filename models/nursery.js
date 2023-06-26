'use strict';
const { Sequelize, Model, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

class Nursery extends Model {}

Nursery.init({
  name: DataTypes.STRING,
  prefecture: DataTypes.STRING,
  city: DataTypes.STRING,
  operator: DataTypes.STRING,
  salary: DataTypes.STRING,
  employmentType: DataTypes.STRING,
  homepage: DataTypes.STRING,
},
 { sequelize, modelName: 'Nursery', timestamps: false });

module.exports = Nursery;
