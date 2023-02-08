const express = require('express')
const db = require('./db/db')
const { uploadFileMiddleware } = require('./middleware/upload')

const router = express.Router()

router.get('/books', (req, res) => {
  db.getAllBooks()
    .then((books) =>
      res.json(
        books.map((book) => ({
          title: book.title,
          author: book.first_name + ' ' + book.last_name,
          year: book.year_pub,
          status: book.status,
          id: book.id,
        }))
      )
    )
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

router.post('/books', (req, res) => {
  return db
    .addAuthor(req.body.author.firstName, req.body.author.lastName)
    .then((authorId) => {
      return db
        .addBook(req.body.title, authorId, req.body.year, req.body.status)
        .then((bookId) => res.json(bookId))
        .catch(console.error)
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

router.delete('/books/:id', (req, res) => {
  const bookId = req.params.id
  return db
    .removeBook(bookId)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

router.get('/statuses', (req, res) => {
  db.getStatusList()
    .then((statusList) => res.json(statusList.map((status) => status.name)))
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

router.post('/covers', uploadFileMiddleware, (req, res) => {
  console.log(req.file)
  res.body = req.file
  res.status(200).json({ filename: req.file })
})

module.exports = router
