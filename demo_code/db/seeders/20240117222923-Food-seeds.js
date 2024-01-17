'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const { Food } = require('../models');
   await Food.bulkCreate([
    {
      name: 'burrito',
      temp: 'hot',
      kcal: 700,
      price: 15.56,
      foodnicityId: 2,
      foodGroupId: 1,
      healthy: true
    },
    {
      name: 'filet mignon',
      temp: 'hot',
      kcal: 1400,
      price: 45.49,
      foodnicityId: 1,
      foodGroupId: 1,
      healthy: true
    },
    {
      name: 'tom yum goong',
      temp: 'hot',
      kcal: 650,
      price: 7.22,
      foodnicityId: 3,
      foodGroupId: 1,
      healthy: false
    },
    {
      name: 'orange',
      temp: 'cold',
      kcal: 180,
      price: 2.30,
      foodnicityId: 1,
      foodGroupId: 2,
      healthy: true
    },
    {
      name: 'donut',
      temp: 'hot',
      kcal: 500,
      price: 3.00,
      foodnicityId: 1,
      foodGroupId: 4,
      healthy: false
    },
    {
      name: 'spinach',
      temp: 'cold',
      kcal: 5,
      price: 4.44,
      foodnicityId: 4,
      foodGroupId: 3,
      healthy: true
    },
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Foods')
  }
};
