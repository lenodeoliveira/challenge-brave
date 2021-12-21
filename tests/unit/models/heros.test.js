const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const HeroModel = require('../../../models/hero');


describe('The hero model', () => {
    const Hero = HeroModel(sequelize, dataTypes);
    const hero = new Hero();

    describe('should have the name of "hero"', () => {
        checkModelName(Hero)('Hero');
    });

    describe('should have the "content" property', () => {
        ['content'].forEach(checkPropertyExists(hero));
    });
});