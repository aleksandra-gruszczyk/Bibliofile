import React from 'react'
import AddBook from './AddBook'
import Books from './Books'
import MainHeader from './Header'

const App = () => {
  return (
    <main>
      <MainHeader />
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
