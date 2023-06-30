'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Use the sequelize instance from sequelize.js

class Nursery extends Model {}

// Nursery.hasMany(Favorite, { foreignKey: 'nursery_id' }); // Use imported 'Favorite' model

Nursery.init({
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  // },
  name: DataTypes.STRING,
  prefecture: DataTypes.STRING,
  city: DataTypes.STRING,
  operator: DataTypes.STRING,
  salary: DataTypes.STRING,
  employmentType: {type: DataTypes.STRING, field: 'employmentType'},
  homepage: DataTypes.STRING,
}, { sequelize, modelName: 'Nursery', tableName: 'Nurseries', timestamps: false });

// Nursery.hasMany(Favorite); // Use imported 'Favorite' model

module.exports = Nursery;
