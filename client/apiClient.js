import request from 'superagent'
const booksUrl = '/api/v1/books'

export function getBooksList() {
  return request
    .get(booksUrl)
    .then((res) => {
      return res.body
    })
    .catch((err) => console.log(err.message))
}
//.map((book) => ({
//   title: book.title,
//   author: book.author,
//   year: book.year,
//   status: book.status,
//   id: book.id,
// }))

export function addBook(title, author, year) {
  return request
    .post(booksUrl)
    .send({ title, author, year })
    .then((res) => res.body)

    .catch((err) => console.log('ERROR: ' + err.message))
}

export function deleteBook(bookId) {
  return request
    .delete(booksUrl + '/' + bookId)
    .then((res) => res.body)
    .catch((err) => console.log('ERROR: ' + err.message)) //(500)
}
