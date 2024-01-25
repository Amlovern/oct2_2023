'use strict';
const {
  Model,
  Op
} = require('sequelize');
// const { FoodGroup } = require('./index');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Food.belongsTo(models.Foodnicity, {
        foreignKey: 'foodnicityId'
      });

      Food.belongsToMany(models.Course, {
        through: models.CourseFood,
        foreignKey: 'foodId',
        otherKey: 'courseId'
      });

      Food.belongsTo(models.FoodGroup, {
        foreignKey: 'foodGroupId'
      });
    }
  }
  Food.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    temp: DataTypes.STRING(10),
    kcal: DataTypes.INTEGER,
    price: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    foodnicityId: DataTypes.INTEGER,
    foodGroupId: DataTypes.INTEGER,
    healthy: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Food',
    defaultScope: {
      // attributes: ['id', 'name', 'temp', 'kcal', 'price', 'foodnicityId', 'foodGroupId', 'healthy']
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
      // attributes: ['id', 'name']
    },
    scopes: {
      namePriceCal: {
        attributes: ['name', 'price', 'kcal', 'createdAt', 'updatedAt']
      },
      maxCal(cal) {
        return {
          where: {
            kcal: {
              [Op.lte]: cal
            }
          }
        }
      },
      includeFoodGroup() {
        const { FoodGroup } = require('./index');
        return {
          include: {
            model: FoodGroup
          }
        }
      }
    }
  });
  return Food;
};