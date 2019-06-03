import { interpret } from 'xstate'
import { toggleMachine } from './toggleMachine'

describe('toggleMachine', () => {
  it('initial state', () => {
    // Assert using .matches()
    expect(toggleMachine.initialState.matches('inactive')).toBe(true)
    // Assert value directly
    expect(toggleMachine.initialState.value).toBe('inactive')
  })

  it('inactive on TOGGLE -> active', () => {
    expect(toggleMachine.transition('inactive', 'TOGGLE').value).toBe('active')
  })

  it('active on TOGGLE -> inactive', () => {
    expect(toggleMachine.transition('active', 'TOGGLE').value).toBe('inactive')
  })
})

describe('Interpreted toggleMachine', () => {
  let toggleService, currentState

  beforeEach(() => {
    currentState = toggleMachine.initialState
    toggleService = interpret(toggleMachine)
      .onTransition(state => {
        if (state.changed) {
          currentState = state
        }
      })
      .start()
  })

  it('initial state', () => {
    expect(currentState.matches('inactive')).toBe(true)
  })

  it('TOGGLE once', () => {
    toggleService.send('TOGGLE')
    expect(currentState.matches('active')).toBe(true)
  })

  it('TOGGLE twice', () => {
    toggleService.send('TOGGLE')
    toggleService.send('TOGGLE')
    expect(currentState.matches('inactive')).toBe(true)
  })
})
