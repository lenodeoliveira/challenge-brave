'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Contacts', [
    {
      "name": "Placehold 01",
      "email": "email@email.com",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      "name": "Placehold 02",
      "email": "email@email2.com",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      "name": "Placehold 03",
      "email": "email@email3.com",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }

  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Contacts', null, {}),
};