'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_game_histories', [
      {
        win: 30,
        lose: 30,
        draw: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        win: 10,
        lose: 20,
        draw: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        win: 30,
        lose: 35,
        draw: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        win: 40,
        lose: 50,
        draw: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        win: 45,
        lose: 10,
        draw: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_game_histories', null, {});
  }
};