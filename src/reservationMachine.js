import { Machine } from 'xstate'

export const reservationMachine = Machine(
  {
    initial: 'invisible',
    states: {
      invisible: {
        id: 'invisible',
        on: {
          CLICK_DATE: [
            { cond: 'empty', target: 'visible.new' },
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
          new: { on: { SUBMIT: '#invisible' } },
          edit: { on: { SUBMIT: '#invisible' } }
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
