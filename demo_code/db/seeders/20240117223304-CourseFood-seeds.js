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
   const { CourseFood } = require('../models');
   await CourseFood.bulkCreate([
    {
      courseId: 2,
      foodId: 2
    },
    {
      courseId: 1,
      foodId: 4
    },
    {
      courseId: 3,
      foodId: 2
    },
    {
      courseId: 5,
      foodId: 1
    },
    {
      courseId: 1,
      foodId: 1
    },
    {
      courseId: 4,
      foodId: 3
    }
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
