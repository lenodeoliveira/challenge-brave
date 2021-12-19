const express = require('express');
const articleController = require('../controllers/articleController');
const contactController = require('../controllers/contactController');


const router = express.Router();


router.get('/article',articleController.getAllArticles);
router.post('/article', articleController.addArticles);
router.get('/contact',contactController.getAllContacts);
router.post('/contact', contactController.addContact);
// router.put(PATH, [validateToken, recipesController.updateRecipes]);
// router.put(
//   '/recipes/:id/image/',
//   [validateToken, upload.single('image')],
//   recipesController.addImage,
// );
// router.delete(PATH, [validateToken, recipesController.deleteRecipe]);

module.exports = router;