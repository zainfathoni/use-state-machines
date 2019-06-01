import { Button } from 'antd'
import React from 'react'

export const DeleteButton = props => (
  <Button key="back" {...props}>
    Delete
  </Button>
)

export const EditButton = props => (
  <Button key="submit" type="primary" {...props}>
    Edit
  </Button>
)
