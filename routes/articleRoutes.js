const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/articles',articleController.getAllArticles);
router.post('/articles', articleController.addArticles);

module.exports = router;