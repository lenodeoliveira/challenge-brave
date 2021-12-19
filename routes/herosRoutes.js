const express = require('express');
const herosController = require('../controllers/herosController');

const router = express.Router();

router.get('/hero', herosController.getAllHeros);
router.get('/hero/:id', herosController.getHeroById);
router.post('/hero', herosController.addHero);
router.put('/hero/:id', herosController.updateHero);
router.delete('/hero/:id', herosController.deleteHero);



module.exports = router;