import { Machine } from 'xstate'

export const modalMachine = Machine(
  {
    id: 'createView',
    initial: 'invisible',
    states: {
      invisible: {
        id: 'invisible',
        on: {
          OPEN: [
            {
              cond: 'empty',
              target: 'visible.create'
            },
            {
              cond: 'single',
              target: 'visible.view'
            },
            { target: 'visible' }
          ]
        }
      },
      visible: {
        on: {
          CLOSE: 'invisible'
        },
        initial: 'view',
        states: {
          view: {
            on: {
              EDIT: 'edit'
            }
          },
          edit: {
            on: {
              SUBMIT: '#invisible'
            }
          },
          create: {
            on: {
              SUBMIT: '#invisible'
            }
          }
        }
      }
    }
  },
  {
    guards: {
      empty: (context, event) =>
        !event.data || (event.data && event.data.length === 0),
      single: (context, event) => event.data && event.data.length === 1
    }
  }
)
