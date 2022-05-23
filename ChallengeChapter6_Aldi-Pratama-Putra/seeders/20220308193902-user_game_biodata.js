'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User_game_biodata', [
    {
      username: 'fnurhidayat',
      password: '12345',
      fullname: 'Fahmi Nur Hidayat',
      birthdate: '04/11/1980',
      address: 'Jl. Kecapi Node.23, Sydney',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      username: 'ketoprak-man',
      password: 'rahasia',
      fullname: 'Ketoprak Humor',
      birthdate: '10/29/1990',
      address: 'Jl. Bangbayang No.A3, Bandung',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      username: 'qwerty',
      password: '54321',      
      fullname: 'Qwerty Uiop',
      birthdate: '01/13/1998',
      address: 'Jl. Jatijajar, Depok',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      username: 'freshgraduate',
      password: 'ordal',
      fullname: 'Mahasiswa IPK <3.00',
      birthdate: '04/11/2000',
      address: 'Jl. Orang Dalam, No.1',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      username: 'spiderman',
      password: "balabala",      
      fullname: 'Peter Parkour',
      birthdate: '11/26/1996',
      address: 'Jl. Pinus Raya No.13, Purwakarta',
      createdAt: new Date(),
      updatedAt: new Date() 
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User_game_biodata', null, {});
  }
};
