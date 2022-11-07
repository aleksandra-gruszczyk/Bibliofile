import React, { useState } from 'react'

function AddBook(props) {
  const [newBook, setNewBook] = useState(' ')

  function handleChange(event) {
    setNewBook(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    props.onAddBook(newBook)
    setNewBook('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-book">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={newBook}
        />
        <br />
        <label htmlFor="author">Author:</label>
        <input type="text" name="name" id="author" onChange={handleChange} />
        <br />
        <button type="submit">Add your book</button>
      </form>
    </div>
  )
}
export default AddBook
