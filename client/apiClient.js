import request from 'superagent'
const booksUrl = '/api/v1/books'
const statusUrl = 'api/v1/statuses'
const coversUrl = 'api/v1/covers'
const ratingsUrl = 'api/v1/ratings'

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

export function addBook(title, author, year, status, rating) {
  return request
    .post(booksUrl)
    .send({ title, author, year, status, rating })
    .then((res) => res.body)

    .catch((err) => console.log('ERROR: ' + err.message))
}

export function deleteBook(bookId) {
  return request
    .delete(booksUrl + '/' + bookId)
    .then((res) => res.body)
    .catch((err) => console.log('ERROR: ' + err.message)) //(500)
}

export function getStatusList() {
  return request
    .get(statusUrl)
    .then((res) => {
      return res.body
    })
    .catch((err) => console.log(err.message))
}

export function addCover(file, bookId) {
  const data = new FormData()
  data.append('image', file)
  let fileTimestamp = Date.now()

  return request
    .post(coversUrl + '/' + bookId + '/' + fileTimestamp)
    .send(data)
    .then((res) => res.body)

    .catch((err) => console.log('ERROR: ' + err.message))
}

export function editBook(title, author, year, status, bookId) {
  return request
    .post(booksUrl + '/' + bookId)
    .send({ title, author, year, status })
    .then((res) => res.body)

    .catch((err) => console.log('ERROR: ' + err.message))
}

export function editRating(bookId, rating) {
  return request
    .post(ratingsUrl + '/' + bookId)
    .send({ rating })
    .then((res) => res.body)

    .catch((err) => console.log('ERROR: ' + err.message))
}
