import React, { useState } from 'react'

function AddBook() {
  const [newBookTitle, setNewBookTitle] = useState(' ')
  const [newAuthor, setNewAuthor] = useState({
    name: '',
    surname: '',
  })
  //if author exists prevent duplicate - case insensitive, fill automatically?

  function handleChangeBook(event) {
    setNewBookTitle(event.target.value)
  }

  function handleChangeAuthor(event) {
    const { name, value } = event.target
    setNewAuthor({
      ...newAuthor,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setNewBookTitle()
    setNewAuthor('')
  }

  const { name: firstName, surname: lastName } = newAuthor

  return (
    <div>
      <label htmlFor="new-book">Title:</label>
      <input
        type="text"
        name="title"
        value={newBookTitle}
        onChange={handleChangeBook}
      />
      <br />
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="first_name"
        value={firstName}
        onChange={handleChangeAuthor}
      />
      <input
        type="text"
        name="last_name"
        value={lastName}
        onChange={handleChangeAuthor}
      />
      <br />
      <button onClick={handleSubmit}>Add your book</button>
    </div>
  )
}
export default AddBook
