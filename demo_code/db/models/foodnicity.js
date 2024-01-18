'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foodnicity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Foodnicity.hasMany(models.Food, {
        foreignKey: 'foodnicityId',
        onDelete: 'CASCADE',
        hooks: true
      })
    }
  }
  Foodnicity.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [5, 25],
          msg: 'Name must be between 5 and 25 chars'
        },
        isLowercase: true
      }
    }
  }, {
    sequelize,
    modelName: 'Foodnicity',
  });
  return Foodnicity;
};