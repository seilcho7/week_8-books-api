const express = require('express');

const Router = express.Router;

const booksRoutes = Router();

const {
    create,
    retrieveAll,
    retrieveOne,
    update,
    deleteOne
} = require('../controllers/books');

booksRoutes.post('/', create);

booksRoutes.get('/', retrieveAll);

booksRoutes.get('/:id', retrieveOne);

booksRoutes.put('/', update);

booksRoutes.delete('/', deleteOne);

module.exports = booksRoutes;