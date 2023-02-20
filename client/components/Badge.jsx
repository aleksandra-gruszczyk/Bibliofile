import { Badge } from '@mantine/core'
import React from 'react'

export default function Tag({ text }) {
  return (
    <Badge
      mx="sm"
      px="md"
      variant="gradient"
      gradient={{ from: '#C70039', to: '#EFAE02' }}
    >
      {text}
    </Badge>
  )
}
