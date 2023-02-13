import React from 'react'
import { Button } from '@mantine/core'
import { GiReturnArrow } from 'react-icons/gi'

export default function FlipButton({ onFlip }) {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '#C70039', to: '#EFAE02' }}
      mt="md"
      radius="md"
      onClick={onFlip}
      className="flip"
      compact="true"
    >
      <GiReturnArrow />
    </Button>
  )
}
