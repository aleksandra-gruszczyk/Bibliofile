import React from 'react'
import { Button } from '@mantine/core'
import { fetchBooks } from '../actions/bookList'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../apiClient'
import { showNotification } from '@mantine/notifications'

export default function RemoveBook({ book }) {
  const dispatch = useDispatch()

  function handleDelete() {
    deleteBook(book.id)
      .then(() => {
        dispatch(fetchBooks())
        showNotification({
          message: `Book "${book.title}" has been removed`,
          color: 'orange',
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Button
      variant="gradient"
      gradient={{ from: '#111F49', to: '#5D90FF' }}
      compact="true"
      mt="md"
      radius="md"
      onClick={() => handleDelete()}
    >
      Remove
    </Button>
  )
}
