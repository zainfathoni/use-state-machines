import { Calendar } from 'antd'
import React, { useState } from 'react'
import { ReservationModal } from './ReservationModal'
import { reservationMachine } from './reservationMachine'
import { useDateMap } from './utils'

export const ReservationCalendar = () => {
  const {
    data,
    date,
    disabledDate,
    formattedDate,
    onCancel,
    onCreate,
    onDelete,
    onUpdate,
    renderDate,
    setMomentDate
  } = useDateMap()

  const [state, setState] = useState(reservationMachine.initialState)

  const handleClickDate = date => {
    setMomentDate(date)
    setState(reservationMachine.transition(state, 'CLICK_DATE'))
  }

  const handleCancel = () => {
    setState(reservationMachine.transition(state, 'CLOSE'))
    onCancel()
  }

  return (
    <main className="container">
      <Calendar
        dateCellRender={renderDate}
        disabledDate={disabledDate}
        onSelect={handleClickDate}
      />
      <ReservationModal
        data={data}
        date={date}
        formattedDate={formattedDate}
        onBack={() => null}
        onCancel={handleCancel}
        onCreate={onCreate}
        onDelete={onDelete}
        onUpdate={onUpdate}
        stateValue={state.value.visible}
      />
    </main>
  )
}
