'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Nursery extends Model {}

Nursery.init({
  name: DataTypes.STRING,
  address: DataTypes.STRING,
  phoneNumber: DataTypes.STRING
}, { sequelize, modelName: 'Nursery' });

module.exports = Nursery;
