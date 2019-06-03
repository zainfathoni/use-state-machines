import { Machine } from 'xstate'

export const reservationMachine = Machine(
  {
    initial: 'invisible',
    states: {
      invisible: {
        id: 'invisible',
        on: {
          CLICK_DATE: [
            { cond: 'empty', target: 'visible.edit' },
            { cond: 'single', target: 'visible.view' },
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
  },
  {
    guards: {
      empty: data => data && data.length === 0,
      single: data => data && data.length === 1
    }
  }
)
