const request = require('supertest')
const server = require('./server')
const db = require('./db/db')

jest.mock('./db/db')
jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

describe('get /api/v1/books', () => {
  it('gets the list of books', () => {
    db.getAllBooks.mockReturnValue(
      Promise.resolve([
        {
          title: 'book title',
          author: 'book author',
          year: '1984',
          status: '1',
          id: '1',
        },
      ])
    )
    return request(server)
      .get('/api/v1/books')
      .then((res) => {
        console.log(res.body)
        expect(res.body).toHaveLength(1)
      })
  })
  it('returns 500 and logs error message when error', () => {
    db.getAllBooks.mockImplementation(() => Promise.reject('No books for you!'))
    return request(server)
      .get('/api/v1/books')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('No books for you!')
      })
  })
})

describe('delete /:id', () => {
  it('deletes a book', () => {
    db.removeBook.mockReturnValue(Promise.resolve(3))
    return request(server)
      .get('/api/v1/books/3')
      .then((res) => {
        expect(res.status).toBe(200)
      })
  })
})
