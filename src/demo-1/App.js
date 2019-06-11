import { Button } from 'antd'
import React, { useState } from 'react'
import './App.css'
import { Modal } from './Modal'

export const App = () => {
  const [visible, setVisible] = useState(false)
  return (
    <main class="app">
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal onCancel={() => setVisible(false)} visible={visible} />
    </main>
  )
}
