import { getBooksList } from '../apiClient'

export const SET_BOOKS = 'SET_BOOKS'
export const SET_BOOKS_PENDING = 'SET_BOOKS_PENDING'

export function setBooksList(bookArr) {
  return {
    type: SET_BOOKS,
    payload: bookArr,
  }
}
export function setBooksPending() {
  return {
    type: SET_BOOKS_PENDING,
  }
}

export function fetchBooks() {
  return (dispatch) => {
    dispatch(setBooksPending())
    return getBooksList()
      .then((results) => {
        dispatch(setBooksList(results))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
