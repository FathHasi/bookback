const express = require('express')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/bookscontroller')
const router = express.Router()

// get all books
router.get('/', getAllBooks)

//get books by id
router.get('/:bookId', getBookById)

//Add a book
router.post('/', addBook)

//update a book
 router.patch('/:bookId', updateBook)

//delete a book
router.delete('/:bookId', deleteBook)

module.exports = router
