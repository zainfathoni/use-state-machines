import { interpret } from 'xstate'
import { toggleMachine } from './machine'

describe('toggleMachine', () => {
  let toggleService, currentState
  beforeEach(() => {
    currentState = toggleMachine.initialState.value
    toggleService = interpret(toggleMachine)
      .onTransition(state => {
        if (state.changed) {
          currentState = state.value
        }
      })
      .start()
  })

  it('initial state', () => {
    expect(currentState).toEqual('inactive')
  })

  it('TOGGLE once', () => {
    toggleService.send('TOGGLE')
    expect(currentState).toEqual('active')
  })

  it('TOGGLE twice', () => {
    toggleService.send('TOGGLE')
    toggleService.send('TOGGLE')
    expect(currentState).toEqual('inactive')
  })
})
