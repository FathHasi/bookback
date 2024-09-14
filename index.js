const express = require('express')
const mongoose = require('mongoose');
const booksRoutes = require('./routes/booksRoutes')
const authorRoutes = require('./routes/authorRoutes')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/books', booksRoutes)
app.use('/author', authorRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(() => console.log('connected')).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://haseebahasbullah7313:peO0vxRk1RlLHTxt@cluster0.bb2i1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

}