import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../actions/bookList'
import BookCard from './BookCard'
import EmptyShelf from './EmptyScreen'

function Books() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  if (books.length == 0) return <EmptyShelf />
  return (
    <>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  )
}

export default Books
