import React, { useState } from 'react'

import { Select } from '@mantine/core'

export default function EditBook() {
  const [value, setValue] = useState(null)
  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <Select
        label="Edit book status"
        placeholder="Reading status"
        value={value}
        onChange={setValue}
        data={[
          { value: 'waiting', label: 'To Be Read' },
          { value: 'reading', label: 'Reading' },
          { value: 'finished', label: 'Finished' },
          { value: 'DNF', label: 'Did Not Finish' },
        ]}
      />
    </div>
  )
}
