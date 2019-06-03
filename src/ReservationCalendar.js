import { Calendar } from 'antd'
import React from 'react'
import { ReservationModal } from './ReservationModal'
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

  return (
    <main className="container">
      <Calendar
        dateCellRender={renderDate}
        disabledDate={disabledDate}
        onSelect={setMomentDate}
      />
      <ReservationModal
        data={data}
        date={date}
        formattedDate={formattedDate}
        onCancel={onCancel}
        onCreate={onCreate}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </main>
  )
}
