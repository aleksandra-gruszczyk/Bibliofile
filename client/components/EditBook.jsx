import React, { useState, useEffect } from 'react'
import { fetchBooks } from '../actions/bookList'
import { editBook, addCover } from '../apiClient'
import { useDispatch } from 'react-redux'
import { useForm } from '@mantine/form'
import {
  TextInput,
  Button,
  Select,
  Text,
  Group,
  FileButton,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'

function EditBook({ book, onSuccessfulEdit }) {
  const [flag, setFlag] = useState(false)
  const dispatch = useDispatch()
  const [file, setFile] = useState(null)

  const form = useForm({
    initialValues: {
      title: book.title,
      firstName: '',
      lastName: '',
      year: book.year,
      status: book.status,
    },
  })

  function toggleFlag() {
    setFlag(!flag)
  }

  useEffect(() => {
    dispatch(fetchBooks())
  }, [flag])

  function handleSubmit(values) {
    editBook(
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
        showNotification({
          message: `Book record for "${values.title}" has been updated`,
          color: 'orange',
        })
        onSuccessfulEdit()
      })
      .catch((error) => {
        console.error(error)
      })
  }
  function handleChange(file) {
    setFile(file)
    addCover(file, book.id)
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

          <Group position="center" mt="xl">
            <Button
              type="submit"
              variant="gradient"
              gradient={{ from: '#C70039', to: '#EFAE02' }}
              compact="true"
              mt="md"
              radius="md"
            >
              Submit changes
            </Button>
          </Group>
          <Group position="center" mt="xl">
            <FileButton
              // type="submit" //??
              variant="gradient"
              gradient={{ from: '#C70039', to: '#EFAE02' }}
              compact="true"
              mt="md"
              radius="md"
              onChange={handleChange}
              accept="image/png,image/jpeg, image/jpg"
            >
              {(props) => <Button {...props}>Upload cover image</Button>}
            </FileButton>
            {file && (
              <Text size="sm" align="center" mt="sm">
                Picked file: {file.name}
              </Text>
            )}
          </Group>
        </div>
      </form>
    </>
  )
}

export default EditBook
