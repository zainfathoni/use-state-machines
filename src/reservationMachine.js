import { Machine } from 'xstate'

export const reservationMachine = Machine({
  initial: 'invisible',
  states: {
    invisible: { id: 'invisible', on: { CLICK_DATE: 'visible' } },
    visible: {
      on: { CLOSE: 'invisible' },
      initial: 'list',
      states: {
        list: { on: { VIEW: 'view' } },
        view: { on: { EDIT: 'edit' } },
        edit: { on: { SUBMIT: '#invisible' } } // use state id to refer parent state
      }
    }
  }
})
