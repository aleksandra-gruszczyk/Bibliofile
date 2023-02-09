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
      'status.name as status',
      'cover_img'
    )
}

function addBook(title, authorId, year, status, db = connection) {
  return db('status')
    .select('id')
    .where('name', status)
    .then((result) => {
      return db('books').insert({
        title: title,
        author_id: authorId,
        year_pub: year,
        status_id: result[0].id,
      })
    })
}

function getOrAddAuthor(firstName, lastName, db = connection) {
  return db('authors')
    .whereLike('first_name', `%${firstName}%`)
    .andWhereLike('last_name', `%${lastName}%`)
    .select('id')
    .first()
    .then((result) => {
      if (typeof result !== 'undefined') {
        return result.id
      }
      return db('authors')
        .insert({
          first_name: firstName,
          last_name: lastName,
        })
        .then((id) => {
          return id[0]
        })
    })
}

function removeBook(bookId, db = connection) {
  return db('books').where('id', bookId).del()
}

function getStatusList(db = connection) {
  return db('status').select('name')
}

function setCover(bookId, cover, db = connection) {
  return db('books').where('id', bookId).update('cover_img', cover)
}

module.exports = {
  getAllBooks,
  addAuthor: getOrAddAuthor,
  addBook,
  removeBook,
  getStatusList,
  setCover,
}
