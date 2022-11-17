import React from 'react'

import AddBook from './AddBook'
import Books from './Books'

const App = () => {
  // function handleAddBook(newBook) {
  //   if (books.includes(newBook)) return
  //   const newBooks = [...books, newBook]
  //   setBooks(newBooks)
  // }

  return (
    <main>
      <h1>{'My books 📝'}</h1>
      <Books />
      <h2>{'Add new books'}</h2>
      <AddBook />
    </main>
  )
}

export default App
