const rescue = require('express-rescue');
const articleServices = require('../services/articleServices');
// image Upload
const multer = require('multer')
const path = require('path')

const addArticles = rescue(async (req, res, next) => {
    // const url = req.file.path
    const { title, content, big, hot, url } = req.body;
    const newArticle = await articleServices.addArticles(
        title, content, url, big, hot
    );

    if (newArticle.message) return next(newArticle);

    res.status(201).json(newArticle);
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


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if (mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')

module.exports = {
    getAllArticles,
    addArticles,
    upload
};