'use strict';
const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../server.js'); // Use the sequelize instance from server.js

class Nursery extends Model {}

Nursery.init({
  name: DataTypes.STRING,
  prefecture: DataTypes.STRING,
  city: DataTypes.STRING,
  operator: DataTypes.STRING,
  salary: DataTypes.STRING,
  employmentType: {type: DataTypes.STRING, field: 'employmentType'},
  homepage: DataTypes.STRING,
},
{ sequelize, modelName: 'Nursery', tableName: 'Nurseries', timestamps: false });

module.exports = Nursery;
