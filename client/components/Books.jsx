import React, { useState, useEffect } from 'react'
import { getBooksList } from '../apiClient'

function Books() {
  const [books, setBooks] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    //setLoading(true)
    getBooksList()
      .then((bookList) => setBooks(bookList))
      .finally(() => {
        setLoading(false)
      })
      .catch(console.error)
  }, [])

  if (isLoading || books == null) return 'Loading...'

  return (
    <section>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            <h3>{book.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Books
