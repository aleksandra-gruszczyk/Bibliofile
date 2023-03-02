import React from 'react'
import { FileButton, Button } from '@mantine/core'
import { RiImageEditFill } from 'react-icons/ri'

export default function EditImage({ change }) {
  return (
    <FileButton
      variant="gradient"
      gradient={{ from: '#111F49', to: '#5D90FF' }}
      mt="md"
      radius="md"
      onChange={change}
      className="editImage"
      compact="true"
      accept="image/png,image/jpeg, image/jpg"
    >
      {(props) => (
        <Button {...props}>
          <RiImageEditFill />
        </Button>
      )}
    </FileButton>
  )
}
