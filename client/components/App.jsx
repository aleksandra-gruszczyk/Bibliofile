import React from 'react'
import AddBook from './AddBook'
import Books from './Books'

const App = () => {
  return (
    <main>
      <h1>{'My books 📝'}</h1>
      <section>
        <Books />
      </section>
      <section>
        <h2>{'Add new books'}</h2>
        <AddBook />
      </section>
    </main>
  )
}

export default App
