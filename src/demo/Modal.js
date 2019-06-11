import { Modal as AntModal } from 'antd'
import React from 'react'

export const Modal = props => (
  <AntModal centered footer={null} {...props}>
    Content
  </AntModal>
)
