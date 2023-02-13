import React, { useState, useEffect } from 'react'
import { addBook, addCover } from '../apiClient'
import { fetchBooks } from '../actions/bookList'
import { useDispatch } from 'react-redux'
import { useForm } from '@mantine/form'
import {
  TextInput,
  Button,
  Center,
  Group,
  Select,
  FileButton,
  Rating,
  Text,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'

function AddBook({ onSuccessfulAdd }) {
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()
  const [file, setFile] = useState(null)
  const [rating, setRating] = useState(null)

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
      values.status,
      rating
    )
      .then((bookId) => {
        if (file !== null) addCover(file, bookId)
      })
      .then(() => {
        toggleFlag()
        showNotification({
          message: `Book "${values.title}" has been added`,
          color: 'orange',
        })
        onSuccessfulAdd()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <form
        encType="multipart/form-data"
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
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
          <Center>
            <Rating
              mt="md"
              position="center"
              value={rating}
              onChange={setRating}
              fractions={2}
              defaultValue={2.5}
              count={5}
            />
          </Center>
          <Group position="center" mt="xl">
            <FileButton
              variant="gradient"
              gradient={{ from: '#C70039', to: '#EFAE02' }}
              compact="true"
              mt="md"
              radius="md"
              onChange={setFile}
              accept="image/png,image/jpeg, image/jpg"
            >
              {(props) => <Button {...props}>Upload cover image</Button>}
            </FileButton>
          </Group>
          {file && (
            <Text size="xs" align="center" mt="sm">
              Picked file: {file.name}
            </Text>
          )}
          <Group position="center" mt="xl">
            <Button
              type="submit"
              variant="gradient"
              gradient={{ from: '#C70039', to: '#EFAE02' }}
              compact="true"
              mt="md"
              radius="md"
            >
              Add new book
            </Button>
          </Group>
        </div>
      </form>
    </>
  )
}
export default AddBook
