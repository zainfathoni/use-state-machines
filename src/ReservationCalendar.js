import { Calendar } from 'antd'
import React from 'react'
import { ReservationModal } from './ReservationModal'
import { reservationMachine } from './reservationMachine'
import { useDateMap } from './utils'
import { useMachine } from './useMachine'

export const ReservationCalendar = () => {
  const {
    data,
    date,
    disabledDate,
    formattedDate,
    getData,
    onCancel,
    onCreate,
    onDelete,
    onUpdate,
    renderDate,
    setMomentDate
  } = useDateMap()

  const [current, send] = useMachine(reservationMachine, { devTools: true })
  console.log(current.value)

  const handleClickDate = date => {
    setMomentDate(date)
    send({ type: 'CLICK_DATE', value: getData(date.date()) })
  }

  const handleCancel = () => {
    send('CLOSE')
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
        stateValue={!!current.value.visible}
      />
    </main>
  )
}
