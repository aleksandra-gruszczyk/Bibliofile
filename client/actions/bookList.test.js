import { fetchBooks } from './bookList'
import { getBooksList } from '../apiClient'

jest.mock('../apiClient')

const mockBookList = [
  {
    title: 'book title',
    author: 'book author',
    year: '1984',
    status: '1',
    id: '1',
  },
]
getBooksList.mockReturnValue(Promise.resolve(mockBookList))

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetch books', () => {
  it('dispatches simple actions', () => {
    return fetchBooks()(fakeDispatch).then(() => {
      const fakeDispatchFirstCallFirstArg = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchFirstCallFirstArg.type).toBe('SET_BOOKS_PENDING')
      return null
    })
  })
})
