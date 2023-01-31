import {
  Badge,
  Button,
  Card,
  Image,
  Rating,
  SimpleGrid,
  Text,
} from '@mantine/core'
import React, { useState } from 'react'
import RemoveBook from './RemoveBook'

export function Front({ book, flipCard }) {
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
  const [value, setValue] = useState(null)
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder className="card">
        <Card.Section
          className="cardSection"
          py="md"
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
          <Rating
            position="center"
            value={value}
            onChange={setValue}
            fractions={2}
            defaultValue={2.5}
            count={5}
          />
        </Card.Section>

        <Card.Section className="cardSection" inheritPadding mt="sm">
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
            <RemoveBook book={book} />
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
