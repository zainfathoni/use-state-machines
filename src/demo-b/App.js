import React, { useState } from 'react'
import { Button, Modal } from '../shared/Components'

export const App = () => {
  const [visible, setVisible] = useState(false)
  const [editing, setEditing] = useState(false)

  let stateValue
  if (visible && !editing) {
    stateValue = 'view'
  } else if (visible && editing) {
    stateValue = 'edit'
  }

  return (
    <main className="app">
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal
        onClose={() => setVisible(false)}
        onEdit={() => setEditing(true)}
        onSubmit={() => {
          setEditing(false)
          setVisible(false)
        }}
        stateValue={stateValue}
      />
    </main>
  )
}
