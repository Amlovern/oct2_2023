'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.Food, {
        through: models.CourseFood,
        foreignKey: 'courseId',
        otherKey: 'foodId'
      });
    }
  }
  Course.init({
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};