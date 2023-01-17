import { animated, useSpring } from '@react-spring/web'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

export const Flip = forwardRef(Flipped)

function Flipped({ front: Front, back: Back }, ref) {
  const [flipped, setFlipped] = useState(false)
  const { transform } = useSpring(flipConfig(flipped))

  const toggleFlip = () => setFlipped((state) => !state)
  useImperativeHandle(ref, () => ({ toggleFlip }))

  return (
    <>
      <div className="cardContainer">
        <animated.div className="cardStyles" style={{ transform }}>
          {Front}
        </animated.div>

        <animated.div
          className="cardStyles"
          style={{
            transform,
            rotateY: '180deg',
          }}
        >
          {Back}
        </animated.div>
      </div>
    </>
  )
}

function flipConfig(flipped) {
  return {
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  }
}
