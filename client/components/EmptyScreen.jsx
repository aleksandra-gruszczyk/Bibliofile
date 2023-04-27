import React from 'react'
import CurvedArrow from 'react-curved-arrow'

export default function EmptyShelf() {
  return (
    <>
      <div className="emptyShelfText">
        Your shelf is empty. {<br />}Start your book collection!
        {<br />}
        <span id="anchor"></span>
      </div>

      <CurvedArrow
        fromSelector="#anchor"
        toSelector="#addButton"
        fromOffsetY={-50}
        toOffsetX={-80}
        middleY={-150}
        middleX={-150}
        color="#FFC830"
        dynamicUpdate="true"
      />
    </>
  )
}
