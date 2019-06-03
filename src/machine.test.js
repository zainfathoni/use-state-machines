import { interpret } from 'xstate'
import { toggleMachine, reservationMachine } from './machine'

describe('toggleMachine', () => {
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

describe('reservationMachine', () => {
  let reservationService, currentState

  beforeEach(() => {
    currentState = reservationMachine.initialState
    reservationService = interpret(reservationMachine)
      .onTransition(state => {
        if (state.changed) {
          currentState = state
        }
      })
      .start()
  })

  it('initial state', () => {
    expect(currentState.matches('invisible')).toBe(true)
  })

  it('CLICK_DATE', () => {
    reservationService.send('CLICK_DATE')
    expect(currentState.matches('visible')).toBe(true)
  })

  it('CLOSE', () => {
    reservationService.send('CLICK_DATE')
    reservationService.send('CLOSE')
    expect(currentState.matches('invisible')).toBe(true)
  })
})
