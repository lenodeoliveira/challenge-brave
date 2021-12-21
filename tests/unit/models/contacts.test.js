const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const ContactModel = require('../../../models/contacts');


describe('The contact model', () => {
    const Contact = ContactModel(sequelize, dataTypes);
    const contact = new Contact();

    describe('should have the name of "Contact"', () => {
        checkModelName(Contact)('Contact');
    });

    describe('should have the "name", "email"', () => {
        ['name', 'email'].forEach(checkPropertyExists(contact));
    });
});