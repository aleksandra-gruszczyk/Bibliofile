import React, { useState } from 'react'
import AddBook from './AddBook'
import Books from './Books'
import MainHeader from './Header'
import { Modal, Button, Group, Affix } from '@mantine/core'
import { TfiPlus } from 'react-icons/tfi'

const App = () => {
  const [opened, setOpened] = useState(false)

  function close() {
    setOpened(false)
  }

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
          <AddBook onSuccessfulAdd={close} />
        </Modal>
        <Affix position={{ bottom: 20, right: 20 }}>
          <Button
            variant="gradient"
            gradient={{ from: '#C70039', to: '#EFAE02' }}
            mt="md"
            radius="md"
            onClick={() => setOpened(true)}
          >
            <TfiPlus />
          </Button>
        </Affix>
      </section>
    </main>
  )
}

export default App
