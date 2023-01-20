import { Flip } from './Flip'
import React, { useRef } from 'react'
import * as Card from './CardSides'

export default function BookCard({ book }) {
  const ref = useRef(null)
  const toggleFlip = () => {
    ref.current.toggleFlip()
  }
  return (
    <Flip
      front={<Card.Front flipCard={toggleFlip} book={book} />}
      back={<Card.Back flipCard={toggleFlip} book={book} />}
      ref={ref}
    />
  )
}
