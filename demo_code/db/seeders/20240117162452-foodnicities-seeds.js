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
  //  await queryInterface.bulkInsert('Foodnicities', [
  //   {name: 'american'},
  //   {name: 'mexican'},
  //   {name: 'asian'},
  //   {name: 'european'},
  //   {name: 'southern'},
  //   {name: 'southern'}
  //  ], {});
  const { Foodnicity } = require('../models');
  await Foodnicity.bulkCreate([
      {name: 'american'},
      {name: 'mexican'},
      {name: 'asian'},
      {name: 'european'},
      {name: 'southern'}
    ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Foodnicities');
  }
};
