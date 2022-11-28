import nock from 'nock'
import { getBooksList } from './apiClient'

describe('gets books from the api', () => {
  it('gets books from the api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/books')
      .reply(200, [
        {
          title: 'book title',
          author: 'book author',
          year: '1984',
          status: '1',
          id: '1',
        },
      ])
    return getBooksList().then((booksArr) => {
      expect(booksArr).toHaveLength(1)
      expect(scope.isDone()).toBe(true)
    })
  })
})
