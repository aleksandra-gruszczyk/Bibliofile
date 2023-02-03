import React, { useState } from 'react'
import AddBook from './AddBook'
import Books from './Books'
import MainHeader from './Header'
import { Modal, Button, Group } from '@mantine/core'

const App = () => {
  const [opened, setOpened] = useState(false)

  return (
    <main>
      <MainHeader />
      <h1 className="h1">{'My books'}</h1>
      <section>
        <Books />
      </section>
      <section>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Add new book"
        >
          <AddBook />
        </Modal>

        <Group position="center">
          <Button
            variant="gradient"
            gradient={{ from: '#C70039', to: '#EFAE02' }}
            mt="md"
            radius="md"
            onClick={() => setOpened(true)}
          >
            Add new book
          </Button>
        </Group>
      </section>
    </main>
  )
}

export default App
