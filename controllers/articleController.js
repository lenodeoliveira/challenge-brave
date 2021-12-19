const express = require('express');
const { Article } = require('../models')

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const articles = await Article.findAll()

    return res.status(200).json(articles);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});


module.exports = router;