const express = require('express');
const bodyParser = require("body-parser");

const articleController = require('./controllers/articleController');
const heroController = require('./controllers/herosController');
const contactController = require('./controllers/contactController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/article', articleController);
app.use('/hero', heroController);
app.use('/contact', heroController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));