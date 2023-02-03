import React, { useState, useEffect } from 'react'
import { addBook } from '../apiClient'
import { fetchBooks } from '../actions/bookList'
import { useDispatch } from 'react-redux'
import { useForm } from '@mantine/form'
import { TextInput, Button, Group, Select } from '@mantine/core'

function AddBook() {
  //if author exists prevent duplicate - case insensitive, fill automatically?
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()

  const form = useForm({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      year: '',
      status: '',
    },
    validate: {
      title: (value) =>
        value.length < 1 ? 'Title must have at least one letter' : null,
      firstName: (value) =>
        value.length < 2 ? 'Name must have at least two letters' : null,
      lastName: (value) =>
        value.length < 2 ? 'Last name must have at least two letters' : null,
    },
  })

  function toggleFlag() {
    setFlag(!flag)
  }

  useEffect(() => {
    dispatch(fetchBooks())
  }, [flag])

  function handleSubmit(values) {
    addBook(
      values.title,
      {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
      },
      values.year,
      values.status
    )
      .then(() => {
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

          <Select
            mt="md"
            label="Reading status"
            placeholder="Reading status"
            {...form.getInputProps('status')}
            data={[
              { value: `waiting`, label: 'To Be Read' },
              { value: `reading`, label: 'Reading' },
              { value: `finished`, label: 'Finished' },
              { value: `DNF`, label: 'Did Not Finish' },
            ]}
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
