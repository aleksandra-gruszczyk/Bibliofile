import React, { useState } from 'react'
import { addBook, addCover, addCategories } from '../apiClient'
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
  MultiSelect,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import { DatePicker } from '@mantine/dates'

function AddBook({ onSuccessfulAdd }) {
  const dispatch = useDispatch()
  const [file, setFile] = useState(null)
  const [rating, setRating] = useState(null)
  const [dateRead, setDateRead] = useState(Date.now())

  const form = useForm({
    initialValues: {
      title: '',
      firstName: '',
      lastName: '',
      date: '',
      status: '',
      categories: '',
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

  function handleSubmit(values) {
    addBook(
      values.title,
      {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
      },
      values.date,
      values.status,
      rating
    )
      .then((bookId) => {
        console.log(values.categories)
        if (file !== null) addCover(file, bookId)
        addCategories(bookId, values.categories)
      })
      .then(() => {
        dispatch(fetchBooks())
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
          <DatePicker
            value={dateRead}
            onChange={setDateRead}
            mt="md"
            label="Date Read"
            placeholder="Date Read"
            {...form.getInputProps('date')}
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
          <MultiSelect
            t="md"
            label="Categories"
            placeholder="Categories"
            {...form.getInputProps('categories')}
            data={[
              { value: `fiction`, label: 'fiction' },
              { value: `non-fiction`, label: 'non-fiction' },
              { value: `graphic novels`, label: 'graphic novels' },
              { value: `manga`, label: 'manga' },
              { value: `mythology`, label: 'mythology' },
              { value: `fantasy`, label: 'fantasy' },
              { value: `science fiction`, label: 'science fiction' },
              { value: `horror`, label: 'horror' },
              { value: `mystery`, label: 'mystery' },
              { value: `thriller`, label: 'thriller' },
              { value: `romance`, label: 'romance' },
              { value: `comedy`, label: 'comedy' },
              { value: `drama`, label: 'drama' },
              { value: `children's fiction`, label: `children's fiction` },
              { value: `classic`, label: 'classic' },
              { value: `poetry`, label: 'poetry' },
              { value: `action/adventure`, label: 'action/adventure' },
              { value: `science`, label: 'science' },
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
