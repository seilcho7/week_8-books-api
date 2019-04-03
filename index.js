const express = require('express');

const app = express();

const port = 3000;

const booksRoutes = require('./routes/books');

const homeRoutes = require('./routes/home');

const es6Renderer = require('express-es6-template-engine');

app.use('/books', booksRoutes);

app.use('/home', homeRoutes);

app.engine('html', es6Renderer);

app.set('view engine', 'html');

app.set('views', 'views');

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});