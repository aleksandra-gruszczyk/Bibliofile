const express = require('express')
const db = require('./db/db')

const router = express.Router()

router.get('/', (req, res) => {
  return db
    .getAllBooks()
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

router.post('/', (req, res) => {
  return db
    .addAuthor(req.body.author.firstName, req.body.author.lastName)
    .then((authorId) => {
      return db
        .addBook(req.body.title, authorId, req.body.year)
        .then((bookId) => (res.body = bookId))
        .catch(console.error)
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {
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

module.exports = router
