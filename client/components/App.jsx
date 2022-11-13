import React from 'react'

//import AddBook from '../../client/components/AddBook'
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
      {/* <AddBook onAddBook={handleAddBook} /> */}
    </main>
  )
}

export default App
