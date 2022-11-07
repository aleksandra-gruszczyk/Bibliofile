import React from 'react'

function Books(props) {
  const { books } = props
  return (
    <section>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            <h3>{book}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Books
