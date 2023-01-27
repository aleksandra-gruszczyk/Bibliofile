import React, { useState, useEffect } from 'react'
import { addBook } from '../apiClient'
import { fetchBooks } from '../actions/bookList'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '@mantine/form'
import { TextInput, Button, Group } from '@mantine/core'

function AddBook() {
  //if author exists prevent duplicate - case insensitive, fill automatically?
  const books = useSelector((state) => state.books)
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()

  const form = useForm({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      year: '',
    },
  })

  function toggleFlag() {
    setFlag(!flag)
  }

  useEffect(() => {
    console.log('jestem')
    dispatch(fetchBooks())
  }, [flag])

  function handleSubmit(values) {
    addBook(
      values.title,
      {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
      },
      values.year
    )
      .then((addedBook) => {
        console.log(addedBook)
        books.push(addedBook)
        toggleFlag()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <div style={{ maxWidth: 320, margin: 'auto' }}>
          <TextInput
            label="Title"
            placeholder="Title"
            {...form.getInputProps('title')}
          />
          <TextInput
            mt="md"
            label="First Name"
            placeholder="First Name"
            {...form.getInputProps('firstName')}
          />
          <TextInput
            mt="md"
            label="Last Name"
            placeholder="Last Name"
            {...form.getInputProps('lastName')}
          />
          <TextInput
            mt="md"
            label="Publication Year"
            placeholder="Publication Year"
            {...form.getInputProps('year')}
          />

          <Group position="center" mt="xl">
            <Button type="submit" variant="outline">
              Add new book
            </Button>
          </Group>
        </div>
      </form>
    </>
  )
}
export default AddBook
