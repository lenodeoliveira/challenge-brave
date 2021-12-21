const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists,
} = require('sequelize-test-helpers');

const ArticleModel = require('../../../models/article');


describe('The article model', () => {
    const Article = ArticleModel(sequelize, dataTypes);
    const article = new Article();

    describe('should have the name of "Article"', () => {
        checkModelName(Article)('Article');
    });

    describe('should have the "title", "content" "url", "big", "hot" property', () => {
        ['title', 'content', 'url', 'big', 'hot'].forEach(checkPropertyExists(article));
    });
});