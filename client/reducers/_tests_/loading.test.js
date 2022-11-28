import reducer from '../loading'
import { setBooksPending } from '../../actions/bookList'

describe('loading reducer', () => {
  it('sets the books pending', () => {
    const state = false
    const action = setBooksPending()
    const newState = reducer(state, action)
    expect(newState).toBe(true)
  })
})
