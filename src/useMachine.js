import { useState, useRef, useEffect } from 'react'
import { interpret } from 'xstate'

export function useMachine(machine, options) {
  // Keep track of the current machine state
  const [current, setCurrent] = useState(machine.initialState)

  // Reference the service
  const serviceRef = useRef(null)

  // Create the service only once
  // See https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
  if (serviceRef.current === null) {
    serviceRef.current = interpret(machine, options).onTransition(state => {
      // Update the current machine state when a transition occurs
      if (state.changed) {
        setCurrent(state)
      }
    })
  }

  const service = serviceRef.current

  useEffect(() => {
    // Start the service when the component mounts
    service.start()

    return () => {
      // Stop the service when the component unmounts
      service.stop()
    }
  }, [service])

  return [current, service.send]
}
