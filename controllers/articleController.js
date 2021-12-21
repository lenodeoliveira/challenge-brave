const rescue = require('express-rescue');
const articleServices = require('../services/articleServices');
// image Upload
const multer = require('multer')
const path = require('path')

const addArticles = rescue(async (req, res, next) => {

    console.info('REQUEST ADD ARTICLES TEST', req.body)

    const { title, content, big, hot } = req.body;
    const url = req.file.path
    const newArticle = await articleServices.addArticles(
        title, content, url, big, hot
    );

    if (newArticle.message) return next(newArticle);

    res.status(201).json();
});

const getAllArticles = rescue(async (req, res, _next) => {
    let articles;

    if (req.query) {
        const { title, order } = req.query;
        articles = await articleServices.getAllArticles(title, order);
    } else {
        articles = await articleServices.getAllArticles();
    }

    res.status(200).json(articles);
});

const getArticleById = rescue(async (req, res, next) => {
    const { id } = req.params;
    const article = await articleServices.getArticleById(id);
    if (article.message) return next(article);
    res.status(200).json(article);

});

const updateArticle = rescue(async (req, res, next) => {
    const { id } = req.params;
    const { title, content, big, hot } = req.body;
    const url = req.file.path
  
    const updatedArticle = await articleServices.updateArticle(id, title, content, url, big, hot)
  
    if (updatedArticle) return next(updatedArticle);
  
    return res.status(204).json();
});

const deleteArticle = rescue(async (req, res, next) => {
    const { id } = req.params;
    const deleteArticle = await articleServices.deleteArticle(id);
    if (deleteArticle) return next(deleteArticle);
  
    res.status(204).send();

});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
      const nameImg = file.originalname;
      const regexName = /[^.]*/;
      const resultName = regexName.exec(nameImg);
      cb(null, resultName[0] + '-' + Date.now() + path.extname(file.originalname))
    }
  });
  
const upload = multer({storage: storage}).single('url')

module.exports = {
    getAllArticles,
    addArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    deleteArticle,
    upload
};