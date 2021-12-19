'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Heros', [
    {
      "content": "Em uma tigela tempere as bistecas com sal e pimenta-do-reino, em uma.",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      "content": "Em uma panela adicione o azeite, refogue o alho e a cebola até dourar.",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      "content": "Sirva as bistecas com o molho e folhas de manjericão frescas por cima.",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }

  ], {}),
  down: async (queryInterface) => queryInterface.bulkDelete('Heros', null, {}),
};
