'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Use the sequelize instance from sequelize.js
const Favorite = require('../models/favorite'); //意味わからんけどここにおく

class Nursery extends Model {}

module.exports = (sequelize, DataTypes) => {
  const Nursery = sequelize.define('Nursery', {
    // Your existing attributes here...
  }, {});

  Nursery.associate = function(models) {
    // associations can be defined here
    Nursery.hasMany(models.Favorite, { foreignKey: 'nursery_id' });
  };

  return Nursery;
};


Favorite.belongsTo(Nursery, { foreignKey: 'nursery_id' });
Nursery.hasMany(Favorite, { foreignKey: 'nursery_id' });

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
