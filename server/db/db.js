const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

function getAllBooks(db = connection) {
  return db('books')
    .join('status', 'books.status_id', 'status.id')
    .join('authors', 'books.author_id', 'authors.id')
    .select(
      'books.id as id',
      'title',
      'authors.first_name',
      'authors.last_name',
      'year_pub',
      'status.name as status'
    )
}

function addBook(title, authorId, year, db = connection) {
  return db('books').insert({
    title: title,
    author_id: authorId,
    year_pub: year,
  })
}

function getOrAddAuthor(firstName, lastName, db = connection) {
  return db('authors')
    .whereLike('first_name', `%${firstName}%`)
    .andWhereLike('last_name', `%${lastName}%`)
    .select('id')
    .first()
    .then((result) => {
      if (result.id !== 0) {
        return result.id
      }
      return db('authors').insert({
        first_name: firstName,
        last_name: lastName,
      })
    })
}

function removeBook(bookId, db = connection) {
  return db('books').where('id', bookId).del()
}

module.exports = {
  getAllBooks,
  addAuthor: getOrAddAuthor,
  addBook,
  removeBook,
}
