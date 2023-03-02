import { Header, Text } from '@mantine/core'
import React from 'react'

export default function MainHeader() {
  return (
    <Header
      className="header"
      height="auto"
      style={{ backgroundColor: '#FDBA00', color: '#000', opacity: '100%' }}
    >
      <Text className="header">Bibliofile</Text>
    </Header>
  )
}
