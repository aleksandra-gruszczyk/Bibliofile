import React, { useState, useEffect } from 'react'
import AddBook from './AddBook'
import { getBooksList, deleteBook } from '../apiClient'

function Books() {
  const [books, setBooks] = useState(null)
  const [isLoading, setLoading] = useState(true)

  function loadBooks() {
    //setLoading(true)
    getBooksList()
      .then((bookList) => setBooks(bookList))
      .finally(() => {
        setLoading(false)
      })
      .catch(console.error)
  }

  useEffect(() => {
    loadBooks()
  }, [])

  function handleDelete(event) {
    const bookId = event.target.name
    deleteBook(bookId)
      .then(() => loadBooks())
      .catch(console.error)
  }

  if (isLoading || books == null) return 'Loading...'

  return (
    <>
      <section>
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              <h3>
                &quot;{book.title}&quot; by {book.author} ({book.year}){' '}
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
