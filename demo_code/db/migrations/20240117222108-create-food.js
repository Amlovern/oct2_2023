'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      temp: {
        type: Sequelize.STRING(10)
      },
      kcal: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false
      },
      foodnicityId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Foodnicities',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      foodGroupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'FoodGroups',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      healthy: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Food');
  }
};