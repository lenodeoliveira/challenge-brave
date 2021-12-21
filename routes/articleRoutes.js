const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/articles',articleController.getAllArticles);
router.post('/articles', articleController.upload,articleController.addArticles);
router.get('/articles/:id',articleController.getArticleById);
router.put('/articles/:id', articleController.upload, articleController.updateArticle);
router.delete('/articles/:id', articleController.deleteArticle);

module.exports = router;