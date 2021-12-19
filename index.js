require('dotenv').config();
const express = require('express');
const articleRoutes = require('./routes/articleRoutes');
const contactRoutes = require('./routes/contactRoutes');
const herosRoutes = require('./routes/herosRoutes');
const error = require('./middleware/error');

const app = express();

const PORT = 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(articleRoutes);
app.use(contactRoutes);
app.use(herosRoutes);

app.use('/uploads', express.static('./uploads'))

app.use(error);

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});