const express = require('express');

const app = express();

const port = 3000;

const booksRoutes = require('./routes/books');

app.use('/books', booksRoutes);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});