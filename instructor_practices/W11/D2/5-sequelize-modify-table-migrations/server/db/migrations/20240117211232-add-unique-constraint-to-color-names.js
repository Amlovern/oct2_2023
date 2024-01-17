'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     
    queryInterface.addConstraint('Users', {
  fields: ['email'],
  type: 'unique',
  name: 'custom_unique_constraint_name'
});
    */
   await queryInterface.addConstraint('Colors', {
    fields: ['name'],
    type: 'unique',
    name: 'colors_name_unique_constraint'
   })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('Colors', 'colors_name_unique_constraint')
  }
};
