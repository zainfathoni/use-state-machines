import { Machine } from 'xstate'

export const toggleMachine = Machine({
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
})
