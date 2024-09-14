const Author = require("../models/authorModel")

const getAllAuthors = async (req, res) => {
  const author = await Author.find({});
    res.json(author)
  }

const getAuthorById = async (req, res) => {
  const author = await Author.findById(req.params.authorId).exec();
     res.json(author)
  }

const addAuthor = async (req, res) => {
  //1.get data from request body
  const data= req.body
   //2.create a document
   const author= new Author(data)
   //3.save document to mongodb
   await author.save()
   //4.send document back as response
   res.json(author)
  }

const updateAuthor =async (req, res) => {
  const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorId, req.body, {new: true})
  if(updatedAuthor) {
    res.json(updatedAuthor)
} else {
    res.status(404).send('Author not found')
}

  }

const deleteAuthor = async (req, res) => {
  const deleted_author = await Author.findByIdAnddelete(req.params.authorId)
  if(deleted_author){
    res.send('Author deleted successfully')
} else {
    res.status(404).send('Author not found')
}

  }

  module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor
}
