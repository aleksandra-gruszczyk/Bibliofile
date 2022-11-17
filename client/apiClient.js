import request from 'superagent'
const booksUrl = '/api/v1/books'

export function getBooksList() {
  return request.get(booksUrl).then((res) => {
    return res.body
  })
}

export function addBook(title, author) {
  return request
    .post(booksUrl)
    .send({ title, author })
    .then((res) => {
      return res.body
    })
}
