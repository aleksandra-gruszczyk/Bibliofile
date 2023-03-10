import React from 'react'
import { Rating } from '@mantine/core'
import { editRating } from '../apiClient'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '../actions/bookList'

export default function BookRating({ book }) {
  const dispatch = useDispatch()

  function handleChange(rating) {
    editRating(book.id, rating)
      .then(() => {
        dispatch(fetchBooks())
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Rating
      position="center"
      value={book.rating}
      onChange={handleChange}
      fractions={2}
      defaultValue={2.5}
      count={5}
    />
  )
}
