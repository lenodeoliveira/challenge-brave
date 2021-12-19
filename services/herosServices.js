const { Op } = require("sequelize");
const { Hero } = require('../models')


const getAllHeros = async (query, order) => {
  let retrieveHeros;
  let filters = order ? order : 'DESC';

  if (query) {
    const queryString = `%${query}%`
    retrieveHeros = Hero.findOne({
      where: {
        content: {
          [Op.like]: queryString
        }
      },
    });
  } else {
    retrieveHeros = await Hero.findAndCountAll({
      order: [['content', `${filters}`]],
    });
  }

  return retrieveHeros;
};

const getHeroById = async (id) => {
  const hero = await Hero.findOne({ where: { id } });
  if (hero === null || hero === undefined) {
    return {
      code: 404,
      message: 'hero not found',
    };
  }
  return hero;

};

const addHero = async (content) => {

  if (!content) {
    return {
      code: 401,
      message: 'All fields must be filled',
    };
  }

  const newContent = await Hero.create({ content });
  return newContent;
};

const updateHero = async (id, content) => {
  const [updatedHero] = await Hero.update(
      { content },
      { where: { id } },
    );

    if(!updatedHero) {
      return {
          code: 404,
          message: 'hero not found',
        };
    }
};

const deleteHero = async (id) => {
  const heroByd = await Hero.findOne({ where: { id }});
  if (heroByd === null || heroByd === undefined) {
      return {
        code: 404,
        message: 'hero not found',
      };
    }

    const deleteHero = await Hero.destroy(
      { where: { id } },
    );
}


module.exports = {
  getAllHeros,
  getHeroById,
  addHero,
  updateHero,
  deleteHero
}