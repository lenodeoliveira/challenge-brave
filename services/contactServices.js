
const { Op } = require("sequelize");
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

const getAllContacts = async (query, order) => {
    let retrieveContacts;
    let filters = order ? order : 'DESC' ;

    if(query) {
        const queryString = `%${query}%`
       retrieveContacts = Contact.findOne({
        where: {
            name: {
              [Op.like]: queryString
            }
          },
        });
    } else {
        retrieveContacts = await Contact.findAndCountAll({
            order: [['name', `${filters}`]],
        });
    }

    return retrieveContacts;
};

const getContactById = async (id) => {
    const contactById = await Contact.findOne({ where: { id }});
    if (contactById === null || contactById === undefined) {
        return {
          code: 404,
          message: 'contact not found',
        };
      }
    return contactById;

};

const updateContact = async (id, name, email) => {
    const [updatedContact] = await Contact.update(
        { name, email },
        { where: { id } },
      );

      if(!updatedContact) {
        return {
            code: 404,
            message: 'contact not found',
          };
      }
};

const deleteContact = async (id) => {
    const contactById = await Contact.findOne({ where: { id }});
    if (contactById === null || contactById === undefined) {
        return {
          code: 404,
          message: 'contact not found',
        };
      }

      const deleteContact = await Contact.destroy(
        { where: { id } },
      );
      console.log('DELETE', deleteContact)
}

module.exports = {
    addContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
}