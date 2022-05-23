'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Admin_games', [
      {
        username: 'admin1',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'admin2',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'admin3',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admin_games', null, {});
  }
};
