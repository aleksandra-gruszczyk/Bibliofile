import React from 'react'
import AddBook from './AddBook'
import Books from './Books'
import MainHeader from './Header'
import EditBook from './EditBook'

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
      <section>
        <EditBook />
      </section>
    </main>
  )
}

export default App
