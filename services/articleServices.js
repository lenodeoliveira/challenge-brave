const { Op } = require("sequelize");
const { Article } = require('../models')


const verifyArticle = (title, content, url, big, hot) => {
    if (title === undefined 
        || content === undefined 
        || url === undefined 
        || big === undefined 
        || hot === undefined) {
      return {
        code: 400,
        message: 'Invalid entries. Try again.',
      };
    }
  
    return {};
  };
  

const addArticles = async (title, content, url, big, hot) => {
    const checkArticle = verifyArticle(title, content, url, big, hot);
    if (checkArticle.message) return checkArticle;

    const newArticle = await Article.create({
        title, 
        content,
        url,
        big,
        hot
    });
    return newArticle;
};

const updateArticle = async (id, title, content, url, big, hot) => {
  const checkArticle = verifyArticle(title, content, url, big, hot);
  if (checkArticle.message) return checkArticle;

  const [updatedArticle] = await Article.update(
    { title, content, url, big, hot },
    { where: { id } },
  );

  if(!updatedArticle) {
    return {
        code: 404,
        message: 'Article not found',
      };
  }
};

const deleteArticle = async (id) => {
  const articleById = await Article.findOne({ where: { id }});
  if (articleById === null || articleById === undefined) {
      return {
        code: 404,
        message: 'Article not found',
      };
    }

     await Article.destroy(
      { where: { id } },
    );
}

const getAllArticles = async (query, order) => {
    let retrieveArticles;
    let filters = order ? order : 'DESC';
  
    if (query) {
      const queryString = `%${query}%`
      retrieveArticles = Article.findOne({
        where: {
          title: {
            [Op.like]: queryString
          }
        },
      });
    } else {
      retrieveArticles = await Article.findAndCountAll({
        order: [['title', `${filters}`]],
      });
    }
  
    return retrieveArticles;
};

const getArticleById = async (id) => {
  const article = await Article.findOne({ where: { id } });
  if (article === null || article === undefined) {
    return {
      code: 404,
      message: 'Article not found',
    };
  }
  return article;

};

module.exports = {
    addArticles,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle
}