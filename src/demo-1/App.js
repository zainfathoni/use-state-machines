import React, { useState } from 'react'
import { Button, Modal } from './Components'

export const App = () => {
  const [visible, setVisible] = useState(false)

  const handleOpen = () => setVisible(true)
  const handleClose = () => setVisible(false)

  return (
    <main className="app">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal onCancel={handleClose} visible={visible} />
    </main>
  )
}
