'use strict';
const { Sequelize, Model, DataTypes } = require('sequelize');
const config = require('../config/config.json');

// const sequelize = require('../server')

// console.log('sequelize = ', sequelize2)
const env = process.env.NODE_ENV || 'development';
console.log("process.env 2", process.env.DATABASE_URL );

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  // sslを無効化
  dialectOptions: {},
  logging: false,
});

class Nursery extends Model {}

Nursery.init({
  name: DataTypes.STRING,
  prefecture: DataTypes.STRING,
  city: DataTypes.STRING,
  operator: DataTypes.STRING,
  salary: DataTypes.STRING,
  employmentType: {type: DataTypes.STRING, field: 'employmenttype'},
  homepage: DataTypes.STRING,
},
{ sequelize, modelName: 'Nursery', tableName: 'Nurseries', timestamps: false });


module.exports = Nursery;
