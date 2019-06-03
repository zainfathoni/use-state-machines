import { Machine } from 'xstate'

export const reservationMachine = Machine({
  initial: 'invisible',
  states: {
    invisible: {
      id: 'invisible',
      on: {
        CLICK_DATE: [
          { cond: data => data && data.length === 0, target: 'visible.edit' },
          { cond: data => data && data.length === 1, target: 'visible.view' },
          { target: 'visible' }
        ]
      }
    },
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
