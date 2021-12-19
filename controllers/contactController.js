const rescue = require('express-rescue');
const contactServices = require('../services/contactServices');

const addContact = rescue(async (req, res, next) => {
  const { name, email } = req.body;
  const newContact = await contactServices.addContact(
      name, email
  );

  if (newContact.message) return next(newContact);

  res.status(201).json(newContact);

});

const getAllContacts = rescue(async (req, res, _next) => {
  const contacts = await contactServices.getAllContacts();
  res.status(200).json(contacts);
});



module.exports = {
  addContact,
  getAllContacts
};