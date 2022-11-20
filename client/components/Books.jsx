import React, { useState, useEffect } from 'react'
import AddBook from './AddBook'
import { getBooksList, deleteBook } from '../apiClient'

function Books() {
  const [books, setBooks] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [reload, setReload] = useState(false)

  useEffect(() => {
    //setLoading(true)
    getBooksList()
      .then((bookList) => setBooks(bookList))
      .finally(() => {
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  function handleDelete(event) {
    const bookId = event.target.name
    console.log(books)
    console.log([...books].filter((book) => book.id != bookId))
    deleteBook(bookId)
      .then(() => setBooks([...books].filter((book) => book.id != bookId)))
      .catch(console.error)
  }

  // function handleAdd() {
  //   setReload(reload + 1)
  // }

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
      <AddBook reload={reload} />
    </>
  )
}

export default Books
