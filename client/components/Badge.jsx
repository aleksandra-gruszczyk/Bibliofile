import { Badge } from '@mantine/core'
import React from 'react'

export default function Tag({ text }) {
  return (
    <Badge
      mx="sm"
      px="md"
      variant="gradient"
      gradient={{ from: '#111F49', to: '#74A0FF' }}
    >
      {text}
    </Badge>
  )
}
