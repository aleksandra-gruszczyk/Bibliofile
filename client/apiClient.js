import request from 'superagent'
const booksUrl = '/api/v1/books'

export function getBooksList() {
  return request.get(booksUrl).then((res) => {
    console.log(res.body)
    return res.body
  })
}
