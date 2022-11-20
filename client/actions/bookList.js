import { getBooksList } from '../apiClient'

export const SET_BOOKS = 'SET_BOOKS'

export function setBooksList(bookArr) {
  return {
    type: SET_BOOKS,
    payload: bookArr,
  }
}

export function fetchBooks() {
  return (dispatch) => {
    return getBooksList()
      .then((results) => {
        dispatch(setBooksList(results))
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
