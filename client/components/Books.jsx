import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../actions/bookList'
import BookCard from './BookCard'

function Books() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <>
      {books.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </>
  )
}

export default Books
