const rescue = require('express-rescue');
const herosServices = require('../services/herosServices');

const getAllHeros = rescue(async (req, res, _next) => {
  
  let heros;

  if(req.query) {
    const { content, order } = req.query;
    heros = await herosServices.getAllHeros(content, order);
  } else {
    heros = await herosServices.getAllHeros();
  }

  res.status(200).json(heros);
});

const getHeroById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const hero = await herosServices.getHeroById(id);
  if (hero.message) return next(hero);
  res.status(200).json(hero);

});

const addHero = rescue(async (req, res, next) => {
  const { content } = req.body;
  const newContent = await herosServices.addHero(content);

  if (newContent.message) return next(newContent);

  res.status(201).json(newContent);

});

const updateHero = rescue(async (req, res, next) => {
  const { content } = req.body;
  const { id } = req.params;

  const updatedHero = herosServices.updateHero(id, content)
  if (updatedHero.message) return next(updatedHero);

  return res.status(204).json();

});

const deleteHero = rescue(async (req, res, _next) => {
  const { id } = req.params;
  await herosServices.deleteHero(id);
  res.status(204).send();
});


module.exports = {
  getAllHeros,
  getHeroById,
  addHero,
  updateHero,
  deleteHero
};