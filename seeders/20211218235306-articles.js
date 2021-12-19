'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Articles',
    [

      {
        "title": "Para as Bistecas",
        "content": "Em uma tigela tempere as bistecas ado ou até o ponto desejado.",
        "url": "pexels-oleg-magni-860977_1.png",
        "big": true,
        "hot": true,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        "title": "Para as panquecas",
        "content": "Em uma tigela, misture bem a farinha, o fermento e o sal. Em outra tigela, junte o leite.",
        "url": "pexels-miguel-á-padriñán-114123_1.png",
        "big": false,
        "hot": true,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        "title": "Para o molho",
        "content": "Em e manjericão, tempere com sal e pimenta do reino a gosto e deixe cozinhar por mais 20 minutos.",
        "url": "pexels-stas-knop-1298601_2.png",
        "big": false,
        "hot": true,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        "title": "Modo de preparo",
        "content": "Tempere as.",
        "url": "pexels-nubia-navarro-(nubikini)-1178991_1.png",
        "big": false,
        "hot": false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        "title": "Cassoulet de Feijão-Branco com Pé",
        "content": "Em uma panela de pressão junte o alho, o azeite e refogue por 2 minutos",
        "url": "pexels-scott-webb-63952_1.png",
        "big": true,
        "hot": true,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        "title": "Bife de Ancho com Salada de Couve-Flor e Avelãs",
        "content": "empere o Ancho Suíno fatiado resfriado com sal.",
        "url": "pexels-olenka-sergienko-1904262_1.png",
        "big": false,
        "hot": false,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Articles', null, {}),
};