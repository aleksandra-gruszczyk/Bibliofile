import reducer from '../books'
import { setBooksList } from '../../actions/bookList'

describe('books reducer', () => {
  it('sets the list of books', () => {
    const state = [
      {
        title: 'book title',
        author: 'book author',
        year: '1984',
        status: '1',
        id: '1',
      },
    ]
    const action = setBooksList
    const newState = reducer(state, action)
    expect(newState).toHaveLength(1)
  })
})
