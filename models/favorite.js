'use strict';
// const { Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
//   HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin,
//   HasManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin,
//   HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, Model, ModelDefined, Optional,
//   Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, ForeignKey } = require('sequelize');
// const sequelize = require('../sequelize'); // Use the sequelize instance from sequelize.js

class Favorite {}

// Favorite.init({
//   // id: {
//   //   type: DataTypes.INTEGER,
//   //   primaryKey: true,
//   // },
//   user_id: DataTypes.STRING,
//   // nursery_id: DataTypes.INTEGER,
// }, { sequelize, modelName: 'Favorite', tableName: 'Favorites', timestamps: false });

// // Favorite.nursery = Favorite.belongsTo(Nursery); // Use imported 'Nursery' model

module.exports = Favorite;
