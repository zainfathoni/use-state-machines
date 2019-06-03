import { Machine } from 'xstate'

export const toggleMachine = Machine({
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
})

export const reservationMachine = Machine({
  initial: 'invisible',
  states: {
    invisible: {
      on: {
        CLICK_DATE: 'visible'
      }
    },
    visible: {
      on: {
        CLOSE: 'invisible'
      }
    }
  }
})
