import React, { useState, useEffect } from 'react'
import { Button } from '@mantine/core'
import { fetchBooks } from '../actions/bookList'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../apiClient'

export default function RemoveBook({ id }) {
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()

  function toggleFlag() {
    setFlag(!flag)
  }

  useEffect(() => {
    dispatch(fetchBooks())
  }, [flag])

  function handleDelete() {
    console.log('usuwam ' + id)
    deleteBook(id)
      .then(() => {
        toggleFlag()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Button
      variant="gradient"
      gradient={{ from: '#C70039', to: '#EFAE02' }}
      compact="true"
      mt="md"
      radius="md"
      onClick={() => handleDelete()}
    >
      Remove
    </Button>
  )
}
