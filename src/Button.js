import { Button } from 'antd'
import React from 'react'

export const DeleteButton = props => <Button {...props}>Delete</Button>

export const EditButton = props => (
  <Button type="primary" {...props}>
    Edit
  </Button>
)
