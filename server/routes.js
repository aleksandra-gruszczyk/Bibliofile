const express = require('express')
const db = require('./db/db')
const { uploadFileMiddleware } = require('./middleware/upload')

const router = express.Router()

function findCategories(categoryTable, book_id) {
  let categories = []
  let foundCategories = categoryTable.find(
    (record) => record.book_id == book_id
  )
  if (typeof foundCategories !== 'undefined') {
    categories = foundCategories.categories
  }
  return categories
}

router.get('/books', (req, res) => {
  db.getAllBooks()
    .then((books) => {
      db.getAllCategoriesPerBookId()
        .then((categoryTable) => {
          return res.json(
            books.map((book) => ({
              title: book.title,
              authorDisplay: book.first_name + ' ' + book.last_name,
              authorFirstName: book.first_name,
              authorLastName: book.last_name,
              dateRead: book.date_read,
              status: book.status,
              id: book.id,
              cover: book.cover_img,
              rating: book.rating,
              categories: findCategories(categoryTable, book.id),
            }))
          )
        })
        .catch((error) => {
          console.error(error)
          res.sendStatus(500)
        })
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

router.post('/books', (req, res) => {
  return db
    .getOrAddAuthor(req.body.author.firstName, req.body.author.lastName)
    .then((authorId) => {
      return db
        .addBook(
          req.body.title,
          authorId,
          req.body.year,
          req.body.status,
          req.body.rating
        )
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

router.post('/covers/:id/:timestamp', uploadFileMiddleware, (req, res) => {
  db.setCover(
    req.params.id,
    req.params.id + '_' + req.params.timestamp + '.png'
  )
    .then(() => {
      res.status(200).json({ filename: req.file })
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

router.post('/books/:id', (req, res) => {
  db.getOrAddAuthor(req.body.author.firstName, req.body.author.lastName)
    .then((authorId) => {
      return db
        .updateBook(
          req.params.id,
          req.body.title,
          authorId,
          req.body.year,
          req.body.status
        )
        .then((bookId) => res.json(bookId))
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

router.post('/ratings/:id', (req, res) => {
  db.setRating(req.params.id, req.body.rating)
    .then((bookId) => {
      res.status(200).json(bookId)
    })
    .catch((error) => {
      console.error(error)
      res.sendStatus(500)
    })
})

module.exports = router
