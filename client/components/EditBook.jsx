import React from 'react'
import { fetchBooks } from '../actions/bookList'
import { editBook, addCover } from '../apiClient'
import { useDispatch } from 'react-redux'
import { useForm } from '@mantine/form'
import {
  TextInput,
  Button,
  Image,
  Select,
  Group,
  FileButton,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import BookRating from './Rating'

function EditBook({ book, onSuccessfulEdit }) {
  const dispatch = useDispatch()

  const form = useForm({
    initialValues: {
      title: book.title,
      firstName: book.authorFirstName,
      lastName: book.authorLastName,
      year: book.year,
      status: book.status,
    },
  })

  function handleSubmit(values) {
    editBook(
      values.title,
      {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
      },
      values.year,
      values.status,
      book.id
    )
      .then(() => {
        dispatch(fetchBooks())
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
    addCover(file, book.id)
      .then(() => {
        dispatch(fetchBooks())
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <div className="container">
        <div className="editForm">
          <Group position="center">
            <Image
              src={'bookCovers/' + book.cover}
              alt="Cover image"
              radius="sm"
            />

            <FileButton
              variant="subtle"
              color="orange"
              compact="true"
              radius="md"
              onChange={handleChange}
              accept="image/png,image/jpeg, image/jpg"
            >
              {(props) => <Button {...props}>Change cover image</Button>}
            </FileButton>
          </Group>
        </div>
        <div className="editForm">
          <form
            encType="multipart/form-data"
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
          >
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
            <BookRating book={book} />
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
          </form>
        </div>
      </div>
    </>
  )
}

export default EditBook
