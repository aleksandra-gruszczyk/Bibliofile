import { Badge, Button, Card, Image, SimpleGrid, Text } from '@mantine/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBook } from '../apiClient'
import { fetchBooks } from '../actions/bookList'

export function Front({ book, flipCard }) {
  // const books = useSelector((state) => state.books)
  console.log('jestem')
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder className="card">
        <Card.Section className="cardSection">
          <Image
            src={'bookCovers/' + book.id + '.png'}
            height="350px"
            alt="Cover image"
          />
          <Button
            variant="gradient"
            gradient={{ from: '#C70039', to: '#EFAE02' }}
            mt="md"
            radius="md"
            onClick={flipCard}
            compact="true"
            className="more"
          >
            More
          </Button>
        </Card.Section>
      </Card>
    </>
  )
}

export function Back({ book, flipCard }) {
  // const books = useSelector((state) => state.books)
  // const dispatch = useDispatch()
  // function removeBook(bookId) {
  //   deleteBook(bookId)
  //     .then(() => dispatch(fetchBooks()))
  //     .catch(console.error)
  // }
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder className="card">
        <Card.Section
          className="cardSection"
          py="lg"
          mt="lg"
          mb="lg"
          position="apart"
        >
          <Text weight={500} ta="center">
            &quot;{book.title}&quot;
          </Text>
          <Text weight={350} ta="center">
            by {book.author} ({book.year})
          </Text>
        </Card.Section>
        <Card.Section
          className="cardSection"
          py="lg"
          mt="lg"
          mb="lg"
          position="apart"
        >
          <Badge
            color="blue"
            variant="gradient"
            gradient={{ from: '#FF5733', to: '#EFAE02' }}
          >
            {book.status}
          </Badge>
        </Card.Section>

        <Card.Section className="cardSection" inheritPadding mt="sm" pb="md">
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
        <Card.Section className="cardSection">
          <Button
            variant="gradient"
            gradient={{ from: '#C70039', to: '#EFAE02' }}
            compact="true"
            mt="md"
            radius="md"
            onClick={flipCard}
            className="back"
          >
            Back
          </Button>
        </Card.Section>
      </Card>
    </>
  )
}
