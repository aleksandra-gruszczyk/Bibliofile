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

function addBook(newBookTitle, db = connection){
  return db('books')
  .insert()
}

function newAuthor()

module.exports = {
  getAllBooks,
}
