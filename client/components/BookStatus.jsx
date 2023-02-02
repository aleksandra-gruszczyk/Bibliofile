import React, { useState, useEffect } from 'react'
import { Select } from '@mantine/core'

export default function BookStatus({ book, mt, label }) {
  const [selectedValue, setSelectedValue] = useState('')

  //
  // const [flag, setFlag] = useState(false)

  // function toggleFlag() {
  //   setFlag(!flag)
  // }

  useEffect(() => {
    if (typeof book !== 'undefined') setSelectedValue(book.status)
  }, [])

  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <Select
        mt={mt}
        label={label}
        placeholder="Reading status"
        value={selectedValue}
        onChange={setSelectedValue}
        data={[
          { value: `1`, label: 'To Be Read' },
          { value: `2`, label: 'Reading' },
          { value: `3`, label: 'Finished' },
          { value: `4`, label: 'Did Not Finish' },
        ]}
      />
    </div>
  )
}
