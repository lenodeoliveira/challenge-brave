const express = require('express');
const { Contact } = require('../models')

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const contact = await Contact.findAll()

    return res.status(200).json(contact);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});


module.exports = router;