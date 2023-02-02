import React from 'react'
import AddBook from './AddBook'
import Books from './Books'
import MainHeader from './Header'
import EditBook from './EditBook'

const App = () => {
  return (
    <main>
      <MainHeader />
      <h1 className="h1">{'My books'}</h1>
      <section>
        <Books />
      </section>
      <section>
        <h1 className="h1">{'Add new books'}</h1>
        <AddBook />
      </section>
      <section>
        <EditBook />
      </section>
    </main>
  )
}

export default App
