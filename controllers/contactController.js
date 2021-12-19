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

const updateContact = rescue(async (req, res, next) => {
      const { name, email } = req.body;
      const { id } = req.params;

      const updatedContact = contactServices.updateContact(id, name, email)
      if (updatedContact.message) return next(updatedContact);

      return res.status(204).json({});

});

const getAllContacts = rescue(async (req, res, _next) => {
  
  let contacts;

  if(req.query) {
    const { name, order } = req.query;
    contacts = await contactServices.getAllContacts(name, order);
  } else {
    contacts = await contactServices.getAllContacts();
  }

  res.status(200).json(contacts);
});

const getContactById = rescue(async (req, res, next) => {

  const { id } = req.params;
  const contact = await contactServices.getContactById(id);
  if (contact.message) return next(contact);
  res.status(200).json(contact);
});

const deleteContact = rescue(async (req, res, _next) => {
  const { id } = req.params;
  await contactServices.deleteContact(id);
  res.status(204).send();
});


module.exports = {
  addContact,
  updateContact,
  getAllContacts,
  getContactById,
  deleteContact
};