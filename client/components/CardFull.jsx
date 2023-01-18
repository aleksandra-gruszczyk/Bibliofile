import { Flip } from './Flip'
import React, { useRef } from 'react'
import * as Card from './CardSides'

export default function CardFull() {
  const ref = useRef(null)
  const toggleFlip = () => {
    ref.current.toggleFlip()
  }
  return (
    <Flip
      front={<Card.Front flipCard={toggleFlip} />}
      back={<Card.Back flipCard={toggleFlip} />}
      ref={ref}
    />
  )
}
