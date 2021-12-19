
const { Contact } = require('../models')

const validateEmail = async (email) => {
    const emailExists = await Contact.findOne({ where: { email }});
    const regEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    console.log(email);

    if (emailExists) {
        return {
            code: 409,
            message: 'Email already registered',
        };
    }

    if (!email || !regEmail.test(email)) {
        return { message: 'Invalid entries. Try again.' };
    }

    return {};
};

const validateEmailAndPassword = (name, email) => {
    if (!email || email === undefined || name === undefined || !name) {
      return {
        code: 401,
        message: 'All fields must be filled',
      };
    }
  
    return {};
  };

const addContact = async (name, email) => {
    
    const verifyName = validateEmailAndPassword(name, email);
    if (verifyName.message) return verifyName;
    
    const emailExists = await validateEmail(email);
    if (emailExists.message) return emailExists;


    const newContact = await Contact.create({ name, email });
    return newContact;
};

const getAllContacts = async () => {
    const contacts = await Contact.findAll();
    return contacts;
};

module.exports = {
    addContact,
    getAllContacts
}