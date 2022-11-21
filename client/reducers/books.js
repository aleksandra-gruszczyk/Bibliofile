import { SET_BOOKS } from '../actions/bookList'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_BOOKS:
      return payload

    default:
      return state
  }
}

export default reducer
