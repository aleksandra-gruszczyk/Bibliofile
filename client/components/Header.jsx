import { Header, Text } from '@mantine/core'
import React from 'react'

export default function MainHeader() {
  return (
    <Header
      height={60}
      p="md"
      style={{
        backgroundColor: '#EFAE02',
        color: '#fff',
        opacity: '75%',
      }}
    >
      <Text tt="uppercase" fw={700} ta="center" fz="lg">
        Bibliofile
      </Text>
    </Header>
  )
}
