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
  MultiSelect,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import BookRating from './Rating'
import { DatePicker } from '@mantine/dates'
import EditImage from './EditImage'

function EditBook({ book, onSuccessfulEdit }) {
  const dispatch = useDispatch()
  // const [dateRead, setDateRead] = useState(new Date(book.dateRead))

  const form = useForm({
    initialValues: {
      title: book.title,
      firstName: book.authorFirstName,
      lastName: book.authorLastName,
      dateRead: book.dateRead,
      status: book.status,
      categories: book.categories,
    },
  })

  function handleSubmit(values) {
    editBook(
      values.title,
      {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
      },
      values.dateRead,
      values.status,
      values.categories,
      book.id
    )
      .then(() => {
        dispatch(fetchBooks())
        showNotification({
          message: `Book record for "${values.title}" has been updated`,
          color: '#111F49',
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

            <EditImage change={handleChange}>
              {(props) => <Button {...props}></Button>}
            </EditImage>
            <BookRating book={book} />
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
            <DatePicker
              // value={dateRead}
              // onChange={setDateRead}
              mt="md"
              label="Date Read"
              placeholder="Date Read"
              {...form.getInputProps('dateRead')}
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
              mt="md"
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

            <Group position="center" mt="xl">
              <Button
                type="submit"
                variant="gradient"
                gradient={{ from: '#111F49', to: '#5D90FF' }}
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
