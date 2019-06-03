import { Machine } from 'xstate'

export const reservationMachine = Machine({
  initial: 'invisible',
  states: {
    invisible: { on: { CLICK_DATE: 'visible' } },
    visible: { on: { CLOSE: 'invisible' } }
  }
})
