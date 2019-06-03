import { interpret } from 'xstate'
import { reservationMachine } from './reservationMachine'

describe('reservationMachine', () => {
  it('initial state', () => {
    // Assert using .matches()
    expect(reservationMachine.initialState.matches('invisible')).toBe(true)
    // Assert value directly
    expect(reservationMachine.initialState.value).toBe('invisible')
  })

  it('invisible on CLICK_DATE -> visible', () => {
    expect(reservationMachine.transition('invisible', 'CLICK_DATE').value).toBe(
      'visible'
    )
  })

  it('visible on CLOSE -> invisible', () => {
    expect(reservationMachine.transition('visible', 'CLOSE').value).toBe(
      'invisible'
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
