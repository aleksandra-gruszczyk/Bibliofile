import { combineReducers } from 'redux'

import books from './books'
import loading from './loading'

export default combineReducers({
  books,
  loading,
})
