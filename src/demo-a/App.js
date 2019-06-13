import React, { useState } from 'react'
import { Button, Modal } from '../shared/Components'

export const App = () => {
  const [visible, setVisible] = useState(false)

  return (
    <main class="app">
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal onClose={() => setVisible(false)} stateValue={visible} />
    </main>
  )
}
