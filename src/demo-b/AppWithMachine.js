import React from 'react'
import { Button, Modal } from '../shared/Components'
import { useMachine } from '../shared/useMachine'
import { modalMachine } from './machine'

export const App = () => {
  const [current, send] = useMachine(modalMachine, { devTools: true })

  const handleOpen = () => send('OPEN')
  const handleClose = () => send('CLOSE')
  const handleEdit = () => send('EDIT')
  const handleSubmit = () => send('SUBMIT')

  return (
    <main class="app">
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal
        onCancel={handleClose}
        onEdit={handleEdit}
        onSubmit={handleSubmit}
        stateValue={current.value.visible}
      />
    </main>
  )
}
