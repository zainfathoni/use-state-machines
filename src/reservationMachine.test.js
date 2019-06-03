import { interpret } from 'xstate'
import { reservationMachine } from './reservationMachine'

describe('reservationMachine', () => {
  it('initial state', () => {
    expect(reservationMachine.initialState.matches('invisible')).toBe(true)
    expect(reservationMachine.initialState.value).toBe('invisible')
  })

  it.each([
    ['invisible', 'CLICK_DATE', 'visible'],
    ['visible', 'CLOSE', 'invisible']
  ])('%s on %s -> %s', (initialState, event, expectedState) => {
    expect(reservationMachine.transition(initialState, event).value).toBe(
      expectedState
    )
  })
})

describe('Interpreted reservationMachine', () => {
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
