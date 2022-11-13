const db = require('./db')

function getBookList() {
  return db
    .getAllBooks()
    .then((books) =>
      books.map((book) => {
        book.title
        book.first_name + book.last_name
        book.year_pub
        book.status
      })
    )
    .catch(console.error)
}

module.exports = {
  getBookList,
}
