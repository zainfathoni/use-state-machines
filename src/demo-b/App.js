import React, { useState } from 'react'
import { Button, Modal } from '../shared/Components'

export const App = () => {
  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(false)

  const handleOpen = () => setVisible(true)
  const handleClose = () => setVisible(false)
  const handleEdit = () => setEditing(true)
  const handleSubmit = () => {
    setEditing(false)
    setVisible(false)
  }

  let stateValue
  if (visible && !editing) {
    stateValue = 'view'
  } else if (visible && editing) {
    stateValue = 'edit'
  }

  return (
    <main class="app">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        onClose={handleClose}
        onEdit={handleEdit}
        onSubmit={handleSubmit}
        stateValue={stateValue}
      />
    </main>
  )
}
