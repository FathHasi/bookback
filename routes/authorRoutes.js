const express = require('express')
const { getAllAuthors, getAuthorById, addAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorcontroller')
const router = express.Router()

// get all author
//router.get('/', (req, res) => {
  //  res.send('Hello World!')
  //})
  router.get('/', getAllAuthors)
  
  //get author by id
  //router.get('/:bookId', (req, res) => {
   // res.send('Hello World!')
  //})
  router.get('/:authorId', getAuthorById)
  
  //Add author
  //router.post('/', (req, res) => {
    // res.send('Got a POST request')
  //})
  router.post('/', addAuthor)
  
  //update a author
  // router.patch('/:bookId', (req, res) => {
   //  res.send('Got a PUT request at /books')
  //})
  router.patch('/:authorId', updateAuthor)
  
  //delete a author
  //router.delete('/:bookId', (req, res) => {
  //   res.send('Got a DELETE request at /books')
   //})
  
  router.delete('/:authorId', deleteAuthor)
  
  module.exports = router