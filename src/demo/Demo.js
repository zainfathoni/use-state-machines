import { Button } from 'antd'
import React, { useState } from 'react'
import './Demo.css'
import { Modal } from './Modal'

export const Demo = () => {
  const [visible, setVisible] = useState(false)
  return (
    <main class="demo">
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal onCancel={() => setVisible(false)} visible={visible} />
    </main>
  )
}
