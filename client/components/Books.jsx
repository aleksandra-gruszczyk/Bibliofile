import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddBook from './AddBook'
import { deleteBook } from '../apiClient'
import { fetchBooks } from '../actions/bookList'

function Books() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  function handleDelete(event) {
    const bookId = event.target.name
    deleteBook(bookId)
      .then(() => dispatch(fetchBooks()))
      .catch(console.error)
  }

  return (
    <>
      <section>
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <h3>
                &quot;{book.title}&quot; by {book.author} ({book.year}){' '}
                <select name="status">
                  <option value="waiting">To be read</option>
                  <option value="reading">Reading</option>
                  <option value="finished">Finished</option>
                  <option value="DNF">DNF</option>
                </select>
                <button name={book.id} onClick={handleDelete}>
                  Remove
                </button>
              </h3>
            </li>
          ))}
        </ul>
      </section>
      <h2>{'Add new books'}</h2>
      <AddBook />
    </>
  )
}

export default Books
