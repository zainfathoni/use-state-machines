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
    index,
    onCancel,
    onCreate,
    onDelete,
    onUpdate,
    setIndex,
    renderDate,
    setMomentDate
  } = useDateMap()

  const [current, send] = useMachine(reservationMachine, { devTools: true })
  console.log(current.value)
  console.log({ data, date })

  const handleClickDate = date => {
    setMomentDate(date)
    send({ type: 'CLICK_DATE', value: getData(date.date()) })
  }

  const handleEdit = () => {
    send('EDIT')
  }

  const handleBack = () => {
    send('BACK')
  }

  const handleView = index => {
    setIndex(index)
    send('VIEW')
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
        index={index}
        onBack={handleBack}
        onCancel={handleCancel}
        onCreate={onCreate}
        onDelete={onDelete}
        onUpdate={onUpdate}
        onEdit={handleEdit}
        onView={handleView}
        send={send}
        stateValue={current.value.visible}
      />
    </main>
  )
}
