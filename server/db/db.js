const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)
const { mapAllCategories } = require('./dataTransform')

function getAllBooks(db = connection) {
  return db('books')
    .join('status', 'books.status_id', 'status.id')
    .join('authors', 'books.author_id', 'authors.id')
    .select(
      'books.id as id',
      'title',
      'authors.first_name',
      'authors.last_name',
      'date_read',
      'status.name as status',
      'cover_img',
      'rating'
    )
}

function addBook(
  title,
  authorId,
  date,
  status,
  categories,
  rating,
  db = connection
) {
  return db('status')
    .select('id')
    .where('name', status)
    .then((result) => {
      return db('books').insert({
        title: title,
        author_id: authorId,
        date_read: date,
        status_id: result[0].id,
        categories: categories,
        rating: rating,
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

function updateBook(bookId, title, authorId, year, status, db = connection) {
  return db('status')
    .select('id')
    .where('name', status)
    .then((result) => {
      return db('books').where('id', bookId).update({
        title: title,
        author_id: authorId,
        year_pub: year,
        status_id: result[0].id,
      })
    })
}

function setRating(bookId, rating, db = connection) {
  return db('books').where('id', bookId).update('rating', rating)
}

function getAllCategoriesPerBookId(db = connection) {
  return db('books_x_categories')
    .join('categories', 'categories.id', 'books_x_categories.category_id')
    .select('book_id', 'categories.name as category')
    .then((result) => mapAllCategories(result))
}

module.exports = {
  getAllBooks,
  getOrAddAuthor,
  addBook,
  removeBook,
  getStatusList,
  setCover,
  updateBook,
  setRating,
  getAllCategoriesPerBookId,
}
