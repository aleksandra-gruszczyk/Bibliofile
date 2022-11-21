import { SET_BOOKS_PENDING, SET_BOOKS } from '../actions/bookList'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS_PENDING:
      return true

    case SET_BOOKS:
      return false

    default:
      return state
  }
}

export default reducer
