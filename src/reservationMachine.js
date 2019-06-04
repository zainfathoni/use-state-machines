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
            { cond: 'single', target: 'visible.viewSingle' },
            { target: 'visible' }
          ]
        }
      },
      visible: {
        on: { CLOSE: 'invisible' },
        initial: 'list',
        states: {
          list: { on: { VIEW: 'view' } },
          viewSingle: { on: { EDIT: 'edit' } },
          view: { on: { EDIT: 'edit', BACK: 'list', DELETE: '#invisible' } },
          new: { on: { SUBMIT: '#invisible' } },
          edit: { on: { SUBMIT: '#invisible' } }
        }
      }
    }
  },
  {
    guards: {
      empty: (context, event) =>
        !event.value || (event.value && event.value.length === 0),
      single: (context, event) => event.value && event.value.length === 1
    }
  }
)
