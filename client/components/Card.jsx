import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  SimpleGrid,
} from '@mantine/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../apiClient'
import { fetchBooks } from '../actions/bookList'

export function BookCard() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  function removeBook(bookId) {
    deleteBook(bookId)
      .then(() => dispatch(fetchBooks()))
      .catch(console.error)
  }

  return (
    <>
      {books.map((book, i) => (
        <Card
          key={i}
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          className="card"
        >
          <Card.Section>
            <Image
              src={'bookCovers/' + book.id + '.png'}
              height={150}
              alt="Cover image"
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>
              &quot;{book.title}&quot; by {book.author} ({book.year})
            </Text>
            <Badge color="blue" variant="light">
              {book.status}
            </Badge>
          </Group>

          <Card.Section inheritPadding mt="sm" pb="md">
            <SimpleGrid cols={2}>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                name={book.id}
              >
                Edit
              </Button>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => removeBook(book.id)}
              >
                Remove
              </Button>
            </SimpleGrid>
          </Card.Section>
        </Card>
      ))}
    </>
  )
}
