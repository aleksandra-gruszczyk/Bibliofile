import React from 'react'

import AddBook from './AddBook'

import { BookCard } from './Card'

function Books() {
  return (
    <>
      <section>
        <BookCard />
      </section>
      <h2>{'Add new books'}</h2>
      <AddBook />
    </>
  )
}

export default Books
