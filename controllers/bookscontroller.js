const Author = require("../models/authorModel");
const Book = require("../models/bookModel")

const getAllBooks = async (req, res) => {
 const book = await Book.find({});
    res.json(book)
  }

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.bookId).exec();
  res.json(book)
}

const addBook = async (req, res) => {
  //1.get data from request body
  const data= req.body
  //2.create a document
  const book = new Book(data)
  //3.save document to mongodb
  await book.save()
  //4.send document back as response
    res.json(book)
  }

const updateBook = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, req.body, {new: true})
    res.json(updatedBook)
  }

const deleteBook = async (req, res) => {
  await Book.findByIdAnddelete(req.params.bookId)
    res.send('deleted')
  }


  module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
}
