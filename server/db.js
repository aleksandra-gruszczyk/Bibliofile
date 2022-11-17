const knex = require('knex')
const config = require('../knexfile').development
const connection = knex(config)

function getAllBooks(db = connection) {
  return db('books')
    .join('status', 'books.status_id', 'status.id')
    .join('authors', 'books.author_id', 'authors.id')
    .select(
      'title',
      'authors.first_name',
      'authors.last_name',
      'year_pub',
      'status.name as status'
    )
}

function addBook(title, authorId, db = connection) {
  return db('books').insert({ title: title, author_id: authorId })
}

function addAuthor(firstName, lastName, db = connection) {
  return db('authors').insert({ first_name: firstName, last_name: lastName })
}

module.exports = {
  getAllBooks,
  addAuthor,
  addBook,
}
