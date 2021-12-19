const express = require('express');
const contactController = require('../controllers/contactController');

const router = express.Router();

router.get('/contacts',contactController.getAllContacts);
router.get('/contacts/:id',contactController.getContactById);
router.post('/contacts', contactController.addContact);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;