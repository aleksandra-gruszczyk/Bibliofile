const express = require('express')
const db = require('./db')

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
        }))
      )
    )
    .catch(console.error)
})

module.exports = router
