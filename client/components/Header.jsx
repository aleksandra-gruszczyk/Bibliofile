import { Header, Text } from '@mantine/core'
import React from 'react'

export default function MainHeader() {
  return (
    <Header
      className="header"
      height="auto"
      style={{
        backgroundColor: '#FFC830',
        color: '#000',
        opacity: '100%',
        marginBottom: '2rem',
      }}
    >
      <Text className="headerText">Bibliofile</Text>
    </Header>
  )
}
