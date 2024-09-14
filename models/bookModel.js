const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    thumbnail: String,
    language: String,
    description: String,
    author: String
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book