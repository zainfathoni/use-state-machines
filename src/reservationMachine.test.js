import { interpret } from 'xstate'
import { reservationMachine } from './reservationMachine'

describe('reservationMachine', () => {
  it('initial state', () => {
    expect(reservationMachine.initialState.matches('invisible')).toBe(true)
    expect(reservationMachine.initialState.value).toBe('invisible')
  })

  it.each([
    ['invisible', 'CLICK_DATE', ['', ''], { visible: 'list' }],
    ['invisible', 'CLICK_DATE', [''], { visible: 'view' }],
    ['invisible', 'CLICK_DATE', [], { visible: 'edit' }],
    [{ visible: 'list' }, 'CLOSE', null, 'invisible'],
    [{ visible: 'list' }, 'VIEW', null, { visible: 'view' }],
    [{ visible: 'view' }, 'CLOSE', null, 'invisible'],
    [{ visible: 'view' }, 'EDIT', null, { visible: 'edit' }],
    [{ visible: 'edit' }, 'CLOSE', null, 'invisible'],
    [{ visible: 'edit' }, 'SUBMIT', null, 'invisible']
  ])(`%j on %s (%j) -> %j`, (initialState, event, eventArgs, expectedState) => {
    expect(
      reservationMachine.transition(initialState, event, eventArgs).value
    ).toEqual(expectedState)
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
