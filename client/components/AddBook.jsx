import React, { useState, useEffect } from 'react'
import { addBook } from '../apiClient'
import { fetchBooks } from '../actions/bookList'
import { useDispatch, useSelector } from 'react-redux'

function AddBook() {
  const [newBookTitle, setNewBookTitle] = useState(' ')
  const [newAuthor, setNewAuthor] = useState({
    firstName: '',
    lastName: '',
  })
  const [newPubYear, setNewPubYear] = useState('')
  //if author exists prevent duplicate - case insensitive, fill automatically?
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [books])

  function handleChangeBook(event) {
    setNewBookTitle(event.target.value)
  }

  function handleChangeAuthor(event) {
    const { name, value } = event.target

    setNewAuthor({
      ...newAuthor,
      [name]: value.trim(),
    })
  }

  function handleChangePubYear(event) {
    setNewPubYear(event.target.value)
  }

  function handleSubmit() {
    //event.preventDefault()
    addBook(newBookTitle.trim(), newAuthor, newPubYear)
  }

  const { firstName, lastName } = newAuthor

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
        name="firstName"
        value={firstName}
        onChange={handleChangeAuthor}
      />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={handleChangeAuthor}
      />
      <br />
      <label htmlFor="year">Publication year:</label>
      <input
        type="text"
        name="year"
        value={newPubYear}
        onChange={handleChangePubYear}
      />
      <br />
      <button onClick={handleSubmit}>Add new book</button>
    </div>
  )
}
export default AddBook
