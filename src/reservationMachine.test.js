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
    ['invisible', 'CLICK_DATE', [], { visible: 'new' }],
    ['invisible', 'CLICK_DATE', null, { visible: 'new' }],
    [{ visible: 'list' }, 'CLOSE', null, 'invisible'],
    [{ visible: 'list' }, 'VIEW', null, { visible: 'view' }],
    [{ visible: 'view' }, 'CLOSE', null, 'invisible'],
    [{ visible: 'view' }, 'EDIT', null, { visible: 'edit' }],
    [{ visible: 'edit' }, 'CLOSE', null, 'invisible'],
    [{ visible: 'edit' }, 'SUBMIT', null, 'invisible'],
    [{ visible: 'new' }, 'CLOSE', null, 'invisible'],
    [{ visible: 'new' }, 'SUBMIT', null, 'invisible']
  ])(`%j on %s (%j) -> %j`, (initialState, type, value, expectedState) => {
    expect(
      reservationMachine.transition(initialState, { type, value }).value
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

  afterEach(() => {
    reservationService.stop()
  })

  it('initial state', () => {
    expect(currentState.value).toEqual('invisible')
  })

  it.each([
    [['CLICK_DATE'], { visible: 'new' }],
    [['CLICK_DATE', 'CLOSE'], 'invisible'],
    [[{ type: 'CLICK_DATE', value: ['', ''] }], { visible: 'list' }],
    [[{ type: 'CLICK_DATE', value: [''] }], { visible: 'view' }],
    [[{ type: 'CLICK_DATE', value: [] }], { visible: 'new' }],
    [[{ type: 'CLICK_DATE', value: ['', ''] }, 'VIEW'], { visible: 'view' }],
    [
      [{ type: 'CLICK_DATE', value: ['', ''] }, 'VIEW', 'EDIT'],
      { visible: 'edit' }
    ],
    [
      [{ type: 'CLICK_DATE', value: ['', ''] }, 'VIEW', 'EDIT', 'SUBMIT'],
      'invisible'
    ]
  ])(`send %j -> %j`, (events, expectedState) => {
    events.forEach(event => reservationService.send(event))
    expect(currentState.value).toEqual(expectedState)
  })
})
