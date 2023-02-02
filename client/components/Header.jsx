import { Header, Text } from '@mantine/core'
import React from 'react'

export default function MainHeader() {
  return (
    <Header
      className="header"
      height="auto"
      style={{ backgroundColor: '#EFAE02', color: '#000', opacity: '75%' }}
    >
      <Text className="header">Bibliofile</Text>
    </Header>
  )
}
