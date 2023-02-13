import {
  BackgroundImage,
  Badge,
  Button,
  Card,
  Center,
  Modal,
  SimpleGrid,
  Text,
} from '@mantine/core'
import React, { useState } from 'react'

import RemoveBook from './RemoveBook'
import EditBook from './EditBook'
import BookRating from './Rating'
import FlipButton from './FlipButton'

export function DefaultCover({ book }) {
  if (book.cover == 'default.png') {
    return (
      <Center>
        <Text className="coverTitle">{book.title.toUpperCase()}</Text>
      </Center>
    )
  }
  return <></>
}

export function Front({ book, flipCard }) {
  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder className="card">
        <Card.Section className="cardSectionFront">
          <BackgroundImage
            className="cover"
            src={'bookCovers/' + book.cover}
            alt="Cover image"
          >
            <DefaultCover book={book} />
          </BackgroundImage>
        </Card.Section>
        <FlipButton onFlip={flipCard} />
      </Card>
    </>
  )
}

export function Back({ book, flipCard }) {
  const [opened, setOpened] = useState(false)

  function close() {
    setOpened(false)
  }

  return (
    <>
      <Card shadow="sm" p="lg" radius="md" withBorder className="card">
        <Card.Section
          className="cardSectionBack"
          py="md"
          mt="lg"
          mb="lg"
          position="apart"
        >
          <Text weight={500} ta="center">
            &quot;{book.title}&quot;
          </Text>
          <Text weight={350} ta="center">
            by {book.authorDisplay} ({book.year})
          </Text>
        </Card.Section>
        <Card.Section className="cardSectionBack" py="lg" mt="lg" mb="lg">
          <Badge
            variant="gradient"
            gradient={{ from: '#C70039', to: '#EFAE02' }}
          >
            {book.status}
          </Badge>
        </Card.Section>
        <Card.Section
          className="cardSectionBack"
          inheritPadding
          mt="sm"
          pb="md"
        >
          <BookRating book={book} />
        </Card.Section>

        <Card.Section className="cardSectionBack" inheritPadding mt="sm">
          <SimpleGrid cols={2}>
            <Modal
              opened={opened}
              onClose={() => setOpened(false)}
              title="Edit book"
              size="700px"
            >
              <EditBook book={book} onSuccessfulEdit={close} />
            </Modal>
            <Button
              variant="gradient"
              gradient={{ from: '#C70039', to: '#EFAE02' }}
              compact="true"
              mt="md"
              radius="md"
              onClick={() => setOpened(true)}
            >
              Edit
            </Button>
            <RemoveBook book={book} />
          </SimpleGrid>
        </Card.Section>

        <FlipButton onFlip={flipCard} />
      </Card>
    </>
  )
}
