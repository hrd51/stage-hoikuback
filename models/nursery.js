'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Use the sequelize instance from sequelize.js
const Favorite = require('../models/favorite'); // Import 'Favorite' model

class Nursery extends Model {}

Nursery.init({
  name: DataTypes.STRING,
  prefecture: DataTypes.STRING,
  city: DataTypes.STRING,
  operator: DataTypes.STRING,
  salary: DataTypes.STRING,
  employmentType: {type: DataTypes.STRING, field: 'employmentType'},
  homepage: DataTypes.STRING,
}, { sequelize, modelName: 'Nursery', tableName: 'Nurseries', timestamps: false });

Nursery.associate = function(models) {
  // associations can be defined here
  Nursery.hasMany(models.Favorite, { foreignKey: 'nursery_id' });
};

module.exports = Nursery;
