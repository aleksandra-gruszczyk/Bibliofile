import React from 'react'

import AddBook from './AddBook'
import { Front, Back } from './CardSides'

// import { BookCard } from './Card'

function Books() {
  return (
    <>
      <section>
        <Front />
        <Back />
      </section>
      <h2>{'Add new books'}</h2>
      <AddBook />
    </>
  )
}

export default Books
